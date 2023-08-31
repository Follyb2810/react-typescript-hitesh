import React, { createContext } from 'react';
import {theme} from './theme'
export const themeContext = createContext(theme);

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <themeContext.Provider value={theme}>
      {children}
    </themeContext.Provider>
  );
};
