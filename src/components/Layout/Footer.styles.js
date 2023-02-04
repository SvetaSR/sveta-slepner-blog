import styled from "styled-components"

export const FooterWrapper = styled.footer`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    position: sticky;
    top: 100%;
    padding: 0 1rem;
`

export const RightSlot = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;

  img {
    vertical-align: middle;
  }
`

export const Copyrights = styled.div`
  font-family: ${({ theme }) => theme.articleTitleFont};
  font-size: 0.8rem;
`