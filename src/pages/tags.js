import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/Layout/Layout';
import { Tags } from '../components/Tags/Tags';
import { PageTitle } from '../components/Layout/General.styles';

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
