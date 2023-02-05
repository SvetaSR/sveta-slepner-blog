import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/Layout/Layout';
import { Tags } from '../components/Tags/Tags';
import { PageTitle } from '../components/Layout/General.styles';
import favicon from '../static/favicon.ico';
import chrome192 from '../static/android-chrome-192x192.png';
import chrome512 from '../static/android-chrome-512x512.png';

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
      <link rel="icon" type="image/x-icon" href={favicon} />
      <link rel="icon" href={chrome192} sizes="196x196" type="image/png" />
      <link rel="icon" href={chrome512} sizes="512x512" type="image/png" />
      <title>{`${data.site.siteMetadata.title} | All Tags`}</title>
    </>
  );
};