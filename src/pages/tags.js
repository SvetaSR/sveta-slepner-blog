import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/Layout/Layout';
import { Tags } from '../components/Tags/Tags';
import { PageTitle } from '../components/Layout/General.styles';
import favicon from '../static/favicon.ico';

const TagsPage = ({
    data: {
      allMarkdownRemark: { group },
    },
  }) => {
    return (
        <Layout>
            <PageTitle>Tags</PageTitle>
            <Tags tags={group.map(({ fieldValue }) => fieldValue)} />
        </Layout>
    )
}

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

export const Head = ({ data }) => {
  return (
    <>
      <html lang="en" />
      <meta name="icon" type="image/x-icon" href={favicon} />
      <title>{`${data.site.siteMetadata.title} | All Tags`}</title>
    </>
  );
};