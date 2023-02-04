import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";
import {
  Article,
  ArticleContent,
  ArticleTitle,
  MinutesRead,
  ArticleSummery,
  ArticleImage,
  ArticleMetadaData,
  Author,
  ArticlesWrapper
} from "./BlogRoll.styles";

export const BlogRollTemplate = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <ArticlesWrapper>
      {posts.map(({ node: post }) => {
        const { id, frontmatter } = post;
        return (
          <Article key={id}>
          <ArticleContent>
            <ArticleTitle>
              <Link to={`/${frontmatter.slug}`}>
                {frontmatter.title}
              </Link>
            </ArticleTitle>
            <ArticleSummery>
            {frontmatter.description}
            </ArticleSummery>
            <ArticleMetadaData>
              <Author>Sveta Slepner</Author>
              <MinutesRead>📖 {frontmatter.timeToRead} minutes read</MinutesRead>
            </ArticleMetadaData>
          </ArticleContent>
          <ArticleImage>
            <img
              src={frontmatter.featuredimage}
              alt="cover"
            />
          </ArticleImage>
        </Article>
        )
      })}
    </ArticlesWrapper>
  );
};

export const BlogRoll = () => {
  return (
    <StaticQuery
      query={graphql`
        query BlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
          ) {
            edges {
              node {
                id
                frontmatter {
                  slug
                  title
                  description
                  date(formatString: "MMMM DD, YYYY")
                  timeToRead
                  featuredimage
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <BlogRollTemplate data={data} count={count} />}
    />
  );
};
