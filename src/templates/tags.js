import React from "react";
import styled from "styled-components";
import { Link, graphql } from "gatsby";
import { Layout } from "../components/Layout/Layout";
import { PageTitle } from "../components/Layout/General.styles";
import { BlogRoll } from "../components/Blog/BlogRoll";

const StyledPageTitle = styled(PageTitle)`
  margin-bottom: 0.5rem;
`;

const LinkToAllTags = styled(Link)`
  display: block;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color};
  text-decoration: none;
  &:visited,
  &:active {
    color: ${({ theme }) => theme.color};
  }
  &:hover {
    color: ${({ theme }) => theme.hightlight};
  }

  margin-bottom: 1.5rem;
`;

const TagRoute = ({ pageContext, data }) => {
  const tag = pageContext.tag;
  return (
    <Layout>
      <StyledPageTitle>#{tag}</StyledPageTitle>
      <LinkToAllTags to="/tags/">Browse all tags</LinkToAllTags>
      <BlogRoll data={data} />
    </Layout>
  );
};

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            slug
            title
            description
            tags
            date(formatString: "DD MMMM, YYYY")
            timeToRead
            featuredimage
          }
        }
      }
    }
  }
`;
