'use client';

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

type Theme = 'light' | 'dark';

enum ThemeEnum {
  LIGHT = 'light',
  DARK = 'dark',
}

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: ThemeEnum.LIGHT,
  setTheme: () => {},
});

type ThemeProviderProps = {
  children: ReactNode;
};

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(ThemeEnum.LIGHT);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme;

    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const setThemeToLocalStorage = (theme: Theme) => {
    localStorage.setItem('theme', theme);
    setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: setThemeToLocalStorage }}>
      <div
        data-theme={
          theme === ThemeEnum.LIGHT ? ThemeEnum.LIGHT : ThemeEnum.DARK
        }
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
