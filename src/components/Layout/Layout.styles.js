import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
    transition: background 0.5s linear;    
    height: 100%;

    a, p, h1 {
        transition: color 0.5s linear;
    }
  }
`;

export const MainWrapper = styled.div`
  font-size: 28px;
  max-width: 900px;
  margin: 0 auto;
  position: relative;
`;

export const Content = styled.div`
  padding: 0 1rem;

  p:has(img) {
    text-align: center;

    img {
      max-width: 100%;
    }
  }
`;
