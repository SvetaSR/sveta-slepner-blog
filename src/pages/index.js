import React from "react";
import { Layout } from "../components/Layout/Layout";
import { BlogRoll } from "../components/Blog/BlogRoll";
import { graphql } from "gatsby";

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
