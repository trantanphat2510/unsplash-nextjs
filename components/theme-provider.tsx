import React from "react";

interface ThemeProviderProps {
  attribute: string;
  defaultTheme: string;
  enableSystem: boolean;
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  attribute,
  defaultTheme,
  enableSystem,
  children,
}) => {
  return (
    <div
      data-theme-attribute={attribute}
      data-default-theme={defaultTheme}
      data-enable-system={enableSystem}
    >
      {children}
    </div>
  );
};