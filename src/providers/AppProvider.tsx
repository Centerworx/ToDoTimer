import React, { ReactNode } from "react";
import { ThemeProvider } from "theme-ui";
import ToDosProvider from "./ToDosProvider";
import { theme } from "../theme/theme";

type AppProviderProps = {
  children: ReactNode;
};

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <ToDosProvider>{children}</ToDosProvider>
    </ThemeProvider>
  );
}
