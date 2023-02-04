import React from "react";
import { Tags } from "../Tags/Tags";
import { ArticleTitle, ArticleWrapper } from "./BlogPost.styles";

const HTMLContent = ({ content }) => (
  <div dangerouslySetInnerHTML={{ __html: content }} />
);

export const BlogPost = ({ title, content }) => {
  return (
    <ArticleWrapper>
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleContent>
        <HTMLContent content={content} />
      </ArticleContent>
      <Tags tags={tags} />
    </ArticleWrapper>
  );
};
