import React, { useState } from 'react';
interface LoginPageProps {
  onLogin: () => void;
}
export function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      onLogin();
    }
  };
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-10">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="/ChatGPT_Image_Feb_24,_2026_at_04_06_15_PM.png"
            alt="MattrMindr"
            className="h-12 object-contain mb-3 mix-blend-multiply dark:mix-blend-lighten dark:invert" />

          <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider text-center mb-1">
            MOBILE COUNTY PUBLIC DEFENDER'S OFFICE
          </div>
          <div className="text-[10px] text-slate-400 uppercase tracking-widest text-center">
            CASE MANAGEMENT SYSTEM
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@mobiledefender.org"
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all"
              required />

          </div>

          <div className="mb-6">
            <label className="block text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all"
              required />

          </div>

          <button
            type="submit"
            className="w-full py-3 bg-slate-900 dark:bg-slate-700 text-white rounded-lg text-sm font-medium hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors shadow-sm mb-4">

            Sign In
          </button>

          <button
            type="button"
            className="text-xs text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 text-center block w-full transition-colors">

            Forgot password?
          </button>
        </form>
      </div>
    </div>);

}