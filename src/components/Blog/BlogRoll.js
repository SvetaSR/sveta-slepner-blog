import React from "react";
import { Link } from "gatsby";
import {
  Article,
  ArticleContent,
  ArticleTitle,
  MinutesRead,
  ArticleSummery,
  ArticleImage,
  ArticleMetadaData,
  Author,
  ArticlesWrapper,
  Date,
} from "./BlogRoll.styles";
import { Tags } from "../Tags/Tags";

export const BlogRoll = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <ArticlesWrapper>
      {posts.map(({ node: post }) => {
        const { id, frontmatter } = post;
        return (
          <Article key={id}>
            <ArticleContent>
              <Date>{frontmatter.date}</Date>
              <ArticleTitle>
                <Link to={`/${frontmatter.slug}`}>{frontmatter.title}</Link>
              </ArticleTitle>
              <ArticleSummery>{frontmatter.description}</ArticleSummery>
              <ArticleMetadaData>
                <Author>Sveta Slepner</Author>
                <MinutesRead>{frontmatter.timeToRead} min read</MinutesRead>
              </ArticleMetadaData>
              <Tags tags={frontmatter.tags} />
            </ArticleContent>
            <ArticleImage>
              <img src={frontmatter.featuredimage} alt="cover" />
            </ArticleImage>
          </Article>
        );
      })}
    </ArticlesWrapper>
  );
};
