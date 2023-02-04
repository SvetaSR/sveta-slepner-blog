import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../../components/Layout/Layout';


const AboutMePage = ({ data }) => {
    return (
        <Layout>
            <h1>About me</h1>
            <p>This page was last build on {data.site.buildTime}</p>
        </Layout>
    )
}

export default AboutMePage;

export const query = graphql`
    query {
        site {
            buildTime
        }
    }
`