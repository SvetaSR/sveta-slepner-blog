import styled from "styled-components";

export const ArticleTitle = styled.h1`
    font-size: 3rem;  
    margin: 1rem 0;
    font-family: ${({ theme }) => theme.articleTitleFont};
`;

export const ArticleContent = styled.h1`
    font-size: 1.5rem;  
    font-family: ${({ theme }) => theme.paragraphFont};
`;

export const ArticleWrapper = styled.article`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`