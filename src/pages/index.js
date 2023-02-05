import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout/Layout";
import { BlogRoll } from "../components/Blog/BlogRoll";
import favicon from '../static/favicon.ico';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <BlogRoll data={data} />
    </Layout>
  );
};

export default IndexPage;

export const indexPageQuery = graphql`
  query BlogRollQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
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

export const Head = ({ data }) => {
  return (
    <>
      <html lang="en" />
      <meta name="icon" type="image/x-icon" href={favicon} />
      <title>{data.site.siteMetadata.title}</title>
    </>
  );
};
