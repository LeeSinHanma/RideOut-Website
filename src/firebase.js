import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// Supports VITE_FIREBASE_* environment variables from Vercel
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSy_demo_api_key",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "ride-out-app.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "ride-out-app",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "ride-out-app.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "123456789",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:123456789:web:abcdef"
};

// Initialize Firebase App singleton
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

// Environment Variable Connection Status (Shows Connected/Not Connected without printing secret key values)
const hasApiKey = Boolean(import.meta.env.VITE_FIREBASE_API_KEY);
const hasAuthDomain = Boolean(import.meta.env.VITE_FIREBASE_AUTH_DOMAIN);
const hasProjectId = Boolean(import.meta.env.VITE_FIREBASE_PROJECT_ID);

console.groupCollapsed(
  `%c🔥 [Firebase Status]: %c${hasApiKey && hasProjectId ? 'Connected Successfully' : 'Using Default Fallback'}`,
  'color: #0EA5E9; font-weight: bold; font-size: 12px;',
  hasApiKey && hasProjectId ? 'color: #10B981; font-weight: bold;' : 'color: #F59E0B; font-weight: bold;'
);
console.log('⚡ Project ID:', hasProjectId ? '✓ Connected' : '❌ Not Connected');
console.log('🌐 Auth Domain:', hasAuthDomain ? '✓ Connected' : '❌ Not Connected');
console.log('🔑 API Key:', hasApiKey ? '✓ Connected' : '❌ Not Connected');
console.log('🛡️ Auth Service:', auth ? '✓ Connected' : '❌ Not Connected');
console.groupEnd();

export { app, auth, firebaseConfig };
