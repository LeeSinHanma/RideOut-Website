import React, { useState, useEffect } from 'react';
import { 
  verifyPasswordResetCode, 
  confirmPasswordReset, 
  applyActionCode 
} from 'firebase/auth';
import { auth } from '../firebase';

// Mascot Assets
import approveWholeBody from '../assets/approveWholeBody.png';
import sadFullBody from '../assets/sadFullBody.png';
import readyWholeBody from '../assets/readyWholeBody.png';
import welcomeWholeBody from '../assets/welcomeWholeBody.png';
import appLogo from '../assets/appLogo.png';

export default function AuthActionModal({ isOpen, onClose, initialMode = null }) {
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
    if (!isOpen) return;

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
      setErrorMessage('No security code found in link. Please use the exact link sent to your email.');
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
  }, [isOpen, initialMode]);

  // Handle Email Verification
  const handleVerifyEmail = async (code) => {
    setStatus('VERIFYING');
    try {
      await applyActionCode(auth, code);
      setStatus('SUCCESS');
      setSuccessMessage('Your email has been verified successfully! You can now access all RideOut features.');
    } catch (err) {
      console.error('Email verification error:', err);
      // Fallback message for demo/expired codes
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
        setErrorMessage('This password reset link is invalid or has expired. Please request a new one.');
      } else {
        setErrorMessage(err.message || 'Unable to process reset link.');
      }
    }
  };

  // Submit New Password
  const handlePasswordResetSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (newPassword.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match. Please check and try again.');
      return;
    }

    setIsSubmitting(true);
    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      setStatus('SUCCESS');
      setSuccessMessage('Your password has been reset successfully! You can now log into the RideOut app with your new password.');
    } catch (err) {
      console.error('Password reset submission error:', err);
      setErrorMessage(err.message || 'Failed to update password. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-slate-800/50 border-b border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={appLogo} alt="RideOut Logo" className="w-8 h-8 object-contain" />
            <div>
              <span className="font-bold text-white tracking-wide text-lg">RIDEOUT</span>
              <span className="text-xs text-sky-400 block font-mono font-medium uppercase tracking-wider">
                {mode === 'verifyEmail' ? 'Email Verification' : 'Password Reset'}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors text-lg"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8">

          {/* STATE 1: LOADING & VERIFYING */}
          {(status === 'LOADING' || status === 'VERIFYING') && (
            <div className="text-center py-8">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <img 
                  src={readyWholeBody} 
                  alt="Ryder Pack Master" 
                  className="w-full h-full object-contain animate-bounce" 
                />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-3 bg-sky-500/20 rounded-full blur-sm"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {status === 'VERIFYING' ? 'Verifying Your Account...' : 'Checking Security Link...'}
              </h3>
              <p className="text-slate-400 text-sm max-w-md mx-auto">
                Ryder is confirming your security token with the RideOut squad servers. Please wait a moment.
              </p>
              <div className="mt-6 flex justify-center">
                <div className="w-10 h-10 border-4 border-sky-500/30 border-t-sky-500 rounded-full animate-spin"></div>
              </div>
            </div>
          )}

          {/* STATE 2: RESET PASSWORD FORM */}
          {status === 'RESET_FORM' && (
            <div className="grid md:grid-cols-12 gap-6 items-center">
              {/* Mascot Side */}
              <div className="md:col-span-5 text-center flex flex-col items-center">
                <div className="relative w-36 h-36 mb-2">
                  <img src={welcomeWholeBody} alt="Ryder" className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(14,165,233,0.3)]" />
                </div>
                <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-3 text-left">
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
                <h3 className="text-xl font-bold text-white mb-1">Set New Password</h3>
                {userEmail && (
                  <p className="text-xs text-slate-400 mb-4">
                    Resetting password for: <span className="text-sky-400 font-medium">{userEmail}</span>
                  </p>
                )}

                {errorMessage && (
                  <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs flex items-start gap-2">
                    <span className="text-sm">⚠️</span>
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handlePasswordResetSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">New Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter new password (min. 6 characters)"
                        required
                        className="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 focus:border-sky-500 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Confirm New Password</label>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Re-enter new password"
                      required
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 focus:border-sky-500 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <label className="flex items-center gap-2 text-slate-400 cursor-pointer select-none">
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
                    className="w-full py-3 px-4 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold rounded-xl shadow-lg shadow-sky-500/25 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-50"
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
            <div className="text-center py-6">
              <div className="relative w-40 h-40 mx-auto mb-4">
                <img 
                  src={approveWholeBody} 
                  alt="Ryder Approval" 
                  className="w-full h-full object-contain drop-shadow-[0_10px_25px_rgba(34,197,94,0.4)] animate-bounce" 
                />
              </div>
              <div className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                ✓ Action Complete
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-2">
                {mode === 'verifyEmail' ? 'Email Verified!' : 'Password Updated!'}
              </h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                {successMessage || 'Your RideOut account details have been successfully updated.'}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={onClose}
                  className="py-3 px-6 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all text-sm"
                >
                  Return to Website
                </button>
                <a
                  href="https://rideout.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-6 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold rounded-xl shadow-lg shadow-sky-500/25 transition-all text-sm text-center"
                >
                  Open RideOut App 🚀
                </a>
              </div>
            </div>
          )}

          {/* STATE 4: ERROR */}
          {status === 'ERROR' && (
            <div className="text-center py-6">
              <div className="relative w-36 h-36 mx-auto mb-4">
                <img 
                  src={sadFullBody} 
                  alt="Ryder Sad" 
                  className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(239,68,68,0.3)]" 
                />
              </div>
              <div className="inline-block px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
                ⚠️ Security Alert
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Link Expired or Invalid</h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                {errorMessage || 'This action link could not be processed. It may have expired or already been used.'}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={onClose}
                  className="py-3 px-6 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all text-sm"
                >
                  Back to Home
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Footer info */}
        <div className="px-6 py-3 bg-slate-950/60 border-t border-slate-800/60 text-center">
          <p className="text-[11px] text-slate-500">
            RideOut Telematics & Squad GPS Convoy System • Protected by Firebase Auth
          </p>
        </div>

      </div>
    </div>
  );
}
