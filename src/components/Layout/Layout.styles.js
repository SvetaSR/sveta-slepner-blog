import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
    height: 100%;
    font-family: ${({ theme }) => theme.articleTitleFont}
  }

  p, li {
    a, a:visited, a:active {
        color: ${({ theme }) => theme.color};
    }
    a:hover {
        color: ${({ theme }) => theme.hightlight};
    }
  }
  
  ol, ul {
    margin: 0;
    padding-inline-start: 20px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h2 {
    margin: 2rem 0 0 0;
  }

  p {
    margin: 1rem 0;
  }

  pre span {
    font-size: 1rem;
    font-family: 'Source Code Pro', monospace;
  }

  code:not([class]) {
    background: ${({ theme }) => theme.tagsBackgroundColor };
    padding: 3px 4px;
    margin: 0 2px;
    font-family: 'Source Code Pro', monospace;
    color: rgba(0,0,0,.84);
  }
`;

export const MainWrapper = styled.div`
  font-size: 28px;
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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
