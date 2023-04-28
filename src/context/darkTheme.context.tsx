//import libraries:
import { createContext, useState, ReactNode } from "react";
import { darkTheme, lightTheme, Theme } from "../theme/theme";

interface State {
  theme: Theme;
  toggleTheme: () => void;
}

interface ProviderProps {
  children: ReactNode;
}

export const NightModeContext = createContext<State>({
  theme: lightTheme,
  toggleTheme: () => null,
});

export const NightModeProvider = ({ children }: ProviderProps) => {
  const [nightMode, setNightMode] = useState(false);

  const toggleTheme = () => (nightMode ? setNightMode(false) : setNightMode(true));

  const theme = nightMode ? darkTheme : lightTheme;

  const value = {
    theme,
    toggleTheme,
  };

  return <NightModeContext.Provider value={value}>{children}</NightModeContext.Provider>;
};
