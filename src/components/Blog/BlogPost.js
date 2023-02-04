import React from "react";
import { Tags } from "../Tags/Tags";
import {
  ArticleTitle,
  ArticleContent,
  ArticleWrapper,
  ArticleMetadaData,
  Author,
  Date,
  MinutesRead
} from "./BlogPost.styles";

const HTMLContent = ({ content }) => (
  <div dangerouslySetInnerHTML={{ __html: content }} />
);

export const BlogPost = ({ title, content, date, timeToRead, tags }) => {
  return (
    <ArticleWrapper>
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleMetadaData>
        <Author>Sveta Slepner</Author><span>·</span>
        <Date>{ date }</Date><span>·</span>
        <MinutesRead>{timeToRead} min read</MinutesRead>
      </ArticleMetadaData>
      <ArticleContent>
        <HTMLContent content={content} />
      </ArticleContent>
      <Tags tags={tags} />
    </ArticleWrapper>
  );
};
