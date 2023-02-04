import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 4rem;
  padding: 0 1rem;
  position: sticky;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.backgroundColor};
  z-index: 1;
  min-height: 50px;

  nav {
    display: flex;
    align-items: center;
    gap: 4rem;
  }
  
  a, a:active, a:visited {
    color: ${({ theme }) => theme.color};
    font-size: 1.5rem;
    line-height: 3rem;
    text-decoration: none;
    font-family: 'B612 Mono', monospace;

    @media (max-width: 400px) {
      font-size: 1rem;
    }
  }

  a[aria-current="page"] {
    border-bottom: 2px solid ${({ theme }) => theme.hightlight}
  }

  a:hover {
    color: ${({ theme }) => theme.hightlight};
  }

`;
