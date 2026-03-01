import React, { useEffect, useState, createContext, useContext } from 'react';
interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export function ThemeProvider({ children }: {children: React.ReactNode;}) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    // Check local storage or system preference on mount
    const savedTheme = localStorage.getItem('mattrmindr-theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    if (savedTheme === 'dark' || !savedTheme && prefersDark) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('mattrmindr-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('mattrmindr-theme', 'light');
      }
      return newMode;
    });
  };
  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode
      }}>

      {children}
    </ThemeContext.Provider>);

}
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}