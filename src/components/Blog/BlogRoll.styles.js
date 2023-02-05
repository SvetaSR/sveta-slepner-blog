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
  gap: 2rem;
`;

export const ArticleTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  font-family: ${({ theme }) => theme.articleTitleFont};

  a {
    color: ${({ theme }) => theme.color};
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.hightlight};
    }
  }
`;

export const ArticleContent = styled.div`
  padding: 1rem 0;
  gap: 1rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 700px) {
    width: 100%;
  }    
`;

export const ArticleSummery = styled.div`
  line-height: 1.6;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.paragraphFont};
`;

export const ArticleImage = styled.div`
  display: flex;
  flex-shrink: 0;
  max-width: 260px;
  align-content: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 700px) {
    display: none;
  }  
`;

export const ArticleMetadaData = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Author = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.hightlight};
`;

export const MinutesRead = styled.div`
  font-size: 0.9rem;
`;

export const Date = styled.div`
  font-size: 1rem;
`;
