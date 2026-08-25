import React, { useState, useEffect } from 'react';
import { 
  verifyPasswordResetCode, 
  confirmPasswordReset, 
  applyActionCode 
} from 'firebase/auth';
import { auth } from '../firebase';

// Mascot & Logo Assets
import approveWholeBody from '../assets/approveWholeBody.png';
import sadFullBody from '../assets/sadFullBody.png';
import readyWholeBody from '../assets/readyWholeBody.png';
import welcomeWholeBody from '../assets/welcomeWholeBody.png';
import appLogo from '../assets/appLogo.png';

export default function AuthActionPage({ initialMode = null, onBackToHome }) {
  // Action state: 'LOADING' | 'RESET_FORM' | 'VERIFYING' | 'SUCCESS' | 'ERROR'
  const [status, setStatus] = useState('LOADING');
  const [mode, setMode] = useState(initialMode); // 'resetPassword' | 'verifyEmail' | 'recoverEmail'
  const [oobCode, setOobCode] = useState('');
  const [userEmail, setUserEmail] = useState('');
  
  // Form fields for Password Reset
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Extract params from URL or props on mount / update
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    let urlMode = urlParams.get('mode');
    const code = urlParams.get('oobCode');
    const pathname = window.location.pathname.toLowerCase();

    // Fallback mode detection based on route paths
    if (!urlMode) {
      if (pathname.includes('/verify')) {
        urlMode = 'verifyEmail';
      } else if (pathname.includes('/reset-password') || pathname.includes('/password-reset')) {
        urlMode = 'resetPassword';
      }
    }

    const currentMode = urlMode || initialMode || 'resetPassword';
    setMode(currentMode);
    setOobCode(code || '');
    setErrorMessage('');
    setSuccessMessage('');

    if (!code) {
      // Missing oobCode link
      setStatus('ERROR');
      setErrorMessage('No security token found in the URL. Please use the exact link sent to your email.');
      return;
    }

    // Process the action code based on mode
    if (currentMode === 'verifyEmail') {
      handleVerifyEmail(code);
    } else if (currentMode === 'resetPassword') {
      handleCheckResetCode(code);
    } else {
      setStatus('ERROR');
      setErrorMessage(`Unsupported action mode: ${currentMode}`);
    }
  }, [initialMode]);

  // Handle Email Verification
  const handleVerifyEmail = async (code) => {
    setStatus('VERIFYING');
    try {
      await applyActionCode(auth, code);
      setStatus('SUCCESS');
      setSuccessMessage('Your email has been verified successfully! You can now access all RideOut squad features.');
    } catch (err) {
      console.error('Email verification error:', err);
      setStatus('ERROR');
      if (err.code === 'auth/invalid-action-code') {
        setErrorMessage('This verification link has expired or has already been used.');
      } else {
        setErrorMessage(err.message || 'Failed to verify email. Please try again.');
      }
    }
  };

  // Check Password Reset Code validity
  const handleCheckResetCode = async (code) => {
    setStatus('LOADING');
    try {
      const email = await verifyPasswordResetCode(auth, code);
      setUserEmail(email);
      setStatus('RESET_FORM');
    } catch (err) {
      console.error('Password reset code check error:', err);
      setStatus('ERROR');
      if (err.code === 'auth/invalid-action-code') {
        setErrorMessage('This password reset link is invalid or has expired. Please request a new link.');
      } else {
        setErrorMessage(err.message || 'Unable to process reset link.');
      }
    }
  };

  // Password requirement validation helpers
  const hasMinLength = newPassword.length >= 8;
  const hasCapital = /[A-Z]/.test(newPassword);
  const hasNumber = /[0-9]/.test(newPassword);
  const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(newPassword);
  const isPasswordValid = hasMinLength && hasCapital && hasNumber && hasSymbol;

  // Submit New Password
  const handlePasswordResetSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!hasMinLength) {
      setErrorMessage('Password must be at least 8 characters long.');
      return;
    }
    if (!hasCapital) {
      setErrorMessage('Password must contain at least 1 capital letter (A-Z).');
      return;
    }
    if (!hasNumber) {
      setErrorMessage('Password must contain at least 1 number (0-9).');
      return;
    }
    if (!hasSymbol) {
      setErrorMessage('Password must contain at least 1 special symbol (e.g. !@#$%^&*).');
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match. Please re-enter carefully.');
      return;
    }

    setIsSubmitting(true);
    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      setStatus('SUCCESS');
      setSuccessMessage('Your password has been reset successfully! You can now log into the RideOut app using your new password.');
    } catch (err) {
      console.error('Password reset submission error:', err);
      setErrorMessage(err.message || 'Failed to update password. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReturnHome = () => {
    if (onBackToHome) {
      onBackToHome();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#DAE2FD] font-['Inter',sans-serif] flex flex-col justify-between relative overflow-x-hidden selection:bg-[#0EA5E9] selection:text-white">
      
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] bg-sky-500/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-blue-600/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none"></div>

      {/* Top Navbar */}
      <header className="w-full px-4 sm:px-6 py-3.5 sm:py-5 border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-md sticky top-0 z-20 flex items-center justify-between">
        <div className="flex items-center gap-2.5 sm:gap-3 cursor-pointer" onClick={handleReturnHome}>
          <img src={appLogo} alt="RideOut Logo" className="w-7 h-7 sm:w-9 sm:h-9 object-contain" />
          <div>
            <span className="font-extrabold text-white text-base sm:text-xl tracking-wider block leading-tight">RIDEOUT</span>
            <span className="text-[10px] sm:text-xs text-sky-400 font-mono font-medium block uppercase tracking-wider">
              {mode === 'verifyEmail' ? 'Account Verification' : 'Security Portal'}
            </span>
          </div>
        </div>

        <button
          onClick={handleReturnHome}
          className="text-xs font-semibold text-slate-300 hover:text-white px-3 sm:px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/50 transition-all flex items-center gap-1.5"
        >
          <span className="hidden sm:inline">← Back to Main Site</span>
          <span className="sm:hidden">← Home</span>
        </button>
      </header>

      {/* Main Content Card Container */}
      <main className="flex-1 flex flex-col items-center justify-center p-3 sm:p-6 md:p-8 z-10 w-full max-w-4xl mx-auto">
        <div className="w-full max-w-2xl bg-slate-900/90 border border-slate-800/90 rounded-2xl sm:rounded-3xl shadow-2xl shadow-sky-950/40 backdrop-blur-xl overflow-hidden p-4 sm:p-6 md:p-10 relative">
          
          {/* STATE 1: LOADING / VERIFYING */}
          {(status === 'LOADING' || status === 'VERIFYING') && (
            <div className="text-center py-10">
              <div className="relative w-40 h-40 mx-auto mb-6">
                <img 
                  src={readyWholeBody} 
                  alt="Ryder Pack Master" 
                  className="w-full h-full object-contain animate-bounce" 
                />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-28 h-4 bg-sky-500/20 rounded-full blur-md"></div>
              </div>
              <h2 className="text-2xl font-extrabold text-white mb-2">
                {status === 'VERIFYING' ? 'Verifying Your Account...' : 'Checking Security Link...'}
              </h2>
              <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
                Ryder is validating your security credentials with the RideOut server. Please wait a moment.
              </p>
              <div className="mt-8 flex justify-center">
                <div className="w-12 h-12 border-4 border-sky-500/20 border-t-sky-500 rounded-full animate-spin"></div>
              </div>
            </div>
          )}

          {/* STATE 2: RESET PASSWORD FORM */}
          {status === 'RESET_FORM' && (
            <div className="grid md:grid-cols-12 gap-8 items-center">
              {/* Mascot Side */}
              <div className="md:col-span-5 text-center flex flex-col items-center border-b md:border-b-0 md:border-r border-slate-800/80 pb-6 md:pb-0 md:pr-6">
                <div className="relative w-44 h-44 mb-3">
                  <img 
                    src={welcomeWholeBody} 
                    alt="Ryder Mascot" 
                    className="w-full h-full object-contain drop-shadow-[0_12px_24px_rgba(14,165,233,0.35)]" 
                  />
                </div>
                <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-4 text-left shadow-lg">
                  <span className="text-xs text-sky-400 font-bold uppercase tracking-wider block mb-1">
                    🛡️ Ryder Says:
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Set a strong new password for your RideOut account so you can jump right back into convoy comms!
                  </p>
                </div>
              </div>

              {/* Form Side */}
              <div className="md:col-span-7">
                <div className="mb-6">
                  <h2 className="text-2xl font-extrabold text-white mb-1">Set New Password</h2>
                  {userEmail && (
                    <p className="text-xs text-slate-400">
                      Resetting password for: <span className="text-sky-400 font-semibold">{userEmail}</span>
                    </p>
                  )}
                </div>

                {errorMessage && (
                  <div className="mb-5 p-3.5 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs flex items-start gap-2.5">
                    <span className="text-base">⚠️</span>
                    <span className="leading-relaxed">{errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handlePasswordResetSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">New Password</label>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Enter new password"
                      required
                      className="w-full px-4 py-3 bg-slate-950/80 border border-slate-700/80 focus:border-sky-500 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition-all"
                    />

                    {/* Live Password Requirements Checklist */}
                    <div className="mt-2.5 grid grid-cols-2 gap-1.5 p-2.5 bg-slate-950/60 border border-slate-800/80 rounded-xl text-[11px]">
                      <div className={`flex items-center gap-1.5 font-medium ${hasMinLength ? 'text-emerald-400 font-semibold' : 'text-slate-500'}`}>
                        <span>{hasMinLength ? '✓' : '•'}</span>
                        <span>Min 8 characters</span>
                      </div>
                      <div className={`flex items-center gap-1.5 font-medium ${hasCapital ? 'text-emerald-400 font-semibold' : 'text-slate-500'}`}>
                        <span>{hasCapital ? '✓' : '•'}</span>
                        <span>1 Capital letter (A-Z)</span>
                      </div>
                      <div className={`flex items-center gap-1.5 font-medium ${hasNumber ? 'text-emerald-400 font-semibold' : 'text-slate-500'}`}>
                        <span>{hasNumber ? '✓' : '•'}</span>
                        <span>1 Number (0-9)</span>
                      </div>
                      <div className={`flex items-center gap-1.5 font-medium ${hasSymbol ? 'text-emerald-400 font-semibold' : 'text-slate-500'}`}>
                        <span>{hasSymbol ? '✓' : '•'}</span>
                        <span>1 Symbol (!@#$%)</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Confirm New Password</label>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Re-enter new password"
                      required
                      className="w-full px-4 py-3 bg-slate-950/80 border border-slate-700/80 focus:border-sky-500 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition-all"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <label className="flex items-center gap-2 text-xs text-slate-400 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={showPassword}
                        onChange={(e) => setShowPassword(e.target.checked)}
                        className="rounded border-slate-700 bg-slate-950 text-sky-500 focus:ring-sky-500"
                      />
                      Show Passwords
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold rounded-xl shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-50 mt-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Updating Password...
                      </>
                    ) : (
                      'Reset Password & Continue'
                    )}
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* STATE 3: SUCCESS */}
          {status === 'SUCCESS' && (
            <div className="text-center py-8">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <img 
                  src={approveWholeBody} 
                  alt="Ryder Approval" 
                  className="w-full h-full object-contain drop-shadow-[0_12px_30px_rgba(34,197,94,0.4)] animate-bounce" 
                />
              </div>
              <div className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-xs font-extrabold uppercase tracking-wider mb-3">
                ✓ Action Complete
              </div>
              <h2 className="text-3xl font-extrabold text-white mb-3">
                {mode === 'verifyEmail' ? 'Email Verified!' : 'Password Reset Successful!'}
              </h2>
              <p className="text-slate-300 text-base max-w-lg mx-auto mb-8 leading-relaxed">
                {successMessage || 'Your RideOut account credentials have been updated.'}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleReturnHome}
                  className="py-3.5 px-6 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all text-sm"
                >
                  Return to Website
                </button>
                <a
                  href="https://rideout.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-6 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold rounded-xl shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all text-sm text-center"
                >
                  Open RideOut Mobile App 🚀
                </a>
              </div>
            </div>
          )}

          {/* STATE 4: ERROR */}
          {status === 'ERROR' && (
            <div className="text-center py-8">
              <div className="relative w-44 h-44 mx-auto mb-6">
                <img 
                  src={sadFullBody} 
                  alt="Ryder Sad" 
                  className="w-full h-full object-contain drop-shadow-[0_12px_24px_rgba(239,68,68,0.35)]" 
                />
              </div>
              <div className="inline-block px-4 py-1.5 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 text-xs font-extrabold uppercase tracking-wider mb-3">
                ⚠️ Security Link Error
              </div>
              <h2 className="text-2xl font-extrabold text-white mb-3">Link Expired or Invalid</h2>
              <p className="text-slate-300 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
                {errorMessage || 'This security action link could not be processed. It may have expired or already been used.'}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleReturnHome}
                  className="py-3.5 px-8 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all text-sm"
                >
                  Return to Home Page
                </button>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Page Footer */}
      <footer className="w-full px-6 py-4 border-t border-slate-800/80 bg-slate-950/80 text-center text-xs text-slate-500 z-10">
        © {new Date().getFullYear()} RideOut Squad Telematics • Powered by Firebase Authentication
      </footer>
    </div>
  );
}
