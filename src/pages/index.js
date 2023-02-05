import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout/Layout";
import { BlogRoll } from "../components/Blog/BlogRoll";
import favicon from '../static/favicon.ico';
import chrome192 from '../static/android-chrome-192x192.png';
import chrome512 from '../static/android-chrome-512x512.png';

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
      <link rel="icon" type="image/x-icon" href={favicon} />
      <link rel="icon" href={chrome192} sizes="196x196" type="image/png" />
      <link rel="icon" href={chrome512} sizes="512x512" type="image/png" />
      <title>{data.site.siteMetadata.title}</title>
    </>
  );
};
