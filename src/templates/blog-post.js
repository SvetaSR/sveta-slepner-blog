import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout/Layout";
import { BlogPost } from "../components/Blog/BlogPost";

const BlogPostTemplate = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPost
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        content={post.html}
        timeToRead={post.frontmatter.timeToRead}
        tags={post.frontmatter.tags}
      />
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        title
        description
        timeToRead
        tags
        canonical
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export const Head = ({ data }) => {
  const {title, description, canonical} = data.markdownRemark.frontmatter;
  return <>
    <html lang="en" />
    <title>{data.site.siteMetadata.title} | {title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    {canonical && <meta property="og:url" content={canonical} />}
  </>
}