import React from "react";
import { ThemeProvider } from "styled-components";
import { useThemeSwitcher } from "../../hooks/themeSwitcher";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { GlobalStyles, MainWrapper, Content } from "./Layout.styles";

export const Layout = ({ children }) => {
  const { isDarkMode, toggleIsDarkMode, theme } = useThemeSwitcher();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainWrapper>
        <Header isDarkMode={isDarkMode} setIsDarkMode={toggleIsDarkMode} />
        <Content>{children}</Content>
        <Footer />
      </MainWrapper>
    </ThemeProvider>
  );
};