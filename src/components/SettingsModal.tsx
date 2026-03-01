import React from 'react';
import { X, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';
interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const { isDarkMode, toggleDarkMode } = useTheme();
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl w-full max-w-md flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 pt-6 pb-4 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
            aria-label="Close settings">

            <X className="w-5 h-5" />
          </button>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            Settings
          </h2>
        </div>

        {/* Content */}
        <div className="px-6 pb-6 space-y-6">
          {/* User Profile Card */}
          <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
            <div className="w-12 h-12 rounded-full bg-amber-600/20 text-amber-700 dark:text-amber-500 flex items-center justify-center font-semibold text-lg border border-amber-500/30">
              AD
            </div>
            <div>
              <div className="font-medium text-slate-900 dark:text-slate-100">
                Admin
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                admin@mobiledefender.org
              </div>
              <div className="text-xs text-slate-400 dark:text-slate-500">
                App Admin
              </div>
            </div>
          </div>

          {/* Appearance Section */}
          <div>
            <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">
              Appearance
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-700 dark:text-slate-300">
                Dark Mode
              </span>
              <div className="flex items-center gap-2">
                <Sun
                  className={`w-4 h-4 ${!isDarkMode ? 'text-amber-500' : 'text-slate-400 dark:text-slate-500'}`} />

                <button
                  onClick={toggleDarkMode}
                  className={`relative w-11 h-6 rounded-full transition-colors ${isDarkMode ? 'bg-amber-500' : 'bg-slate-200 dark:bg-slate-700'}`}
                  role="switch"
                  aria-checked={isDarkMode}
                  aria-label="Toggle dark mode">

                  <div
                    className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform ${isDarkMode ? 'translate-x-6' : 'translate-x-1'}`} />

                </button>
                <Moon
                  className={`w-4 h-4 ${isDarkMode ? 'text-amber-500' : 'text-slate-400 dark:text-slate-500'}`} />

              </div>
            </div>
          </div>

          {/* Security Section */}
          <div>
            <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">
              Security
            </div>
            <button className="w-full py-2.5 px-4 text-sm text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
              Change Password
            </button>
          </div>

          {/* Session Section */}
          <div>
            <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">
              Session
            </div>
            <button className="w-full py-2.5 px-4 text-sm text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/50 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>);

}