import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout/Layout";

const BlogPost = ({ data }) => {
  console.log('xxx', data);
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPost
        title={post.frontmatter.title}
        content={post.html}
        tags={post.frontmatter.tags}
      />
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
