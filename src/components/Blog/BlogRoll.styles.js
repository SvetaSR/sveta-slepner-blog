import styled from "styled-components";

export const ArticlesWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;

export const Article = styled.article`
    width: 100%;
    border-bottom: 1px solid #edeff2;
    display: flex;
`;

export const ArticleTitle = styled.h1`
    font-size: 2rem;  
    margin: 1rem 0;
    font-family: ${({ theme }) => theme.articleTitleFont};

    a {
        color: ${({ theme }) => theme.color};
        text-decoration: none;
        &:hover {
            color: ${({ theme }) => theme.hightlight};
        }
    }
`

export const ArticleContent = styled.div`
    width: 70%;
    flex-shrink: 0;
    padding: 1rem;
`;

export const ArticleSummery = styled.div`
    margin: 1rem 0;
    line-height: 1.5;
    font-size: 1.2rem;
    font-family: ${({ theme }) => theme.paragraphFont};
`;

export const ArticleImage = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    }
`;

export const ArticleMetadaData = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const Author = styled.span`
    font-size: 0.5em;
    color: ${({ theme }) => theme.hightlight };
`;
export const MinutesRead = styled.div`
    font-size: 0.5em;
`;
