import styled from "styled-components";

export const ArticleTitle = styled.h1`
    font-size: 2.5rem;  
    margin: 0;
    font-family: ${({ theme }) => theme.articleTitleFont};
`;

export const ArticleContent = styled.div`
    font-size: 1.3rem;  
    line-height: 1.8;
    font-family: ${({ theme }) => theme.paragraphFont};  
`;

export const ArticleWrapper = styled.article`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const ArticleMetadaData = styled.div`
    display: flex;
    align-items: center;
    gap: 0.2rem;
`;

export const Author = styled.span`
    font-size: 0.9rem;
    color: ${({ theme }) => theme.hightlight };
`;

export const Date = styled.div`
    font-size: 0.9rem;
`;

export const MinutesRead = styled.div`
    font-size: 0.9rem;
`;