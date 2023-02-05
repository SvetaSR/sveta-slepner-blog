import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import { PageTitle } from "../components/Layout/General.styles";
import { Layout } from "../components/Layout/Layout";
import favicon from '../static/favicon.ico';

const ContentWrapper = styled.article`
  display: flex;
  width: 100%;
  gap: 2rem;

  @media (max-width: 700px) {
    flex-direction: column-reverse;
  }
`;
const Content = styled.div`
  font-size: 1.3rem;
  line-height: 1.8;
  flex-grow: 1;
  font-family: ${({ theme }) => theme.paragraphFont};
  
  p:first-child {
    margin-top: 0;
  }
`;

const Image = styled.div`
  flex-shrink: 0;
  width: 250px;
  height: 500px;
  background-image: url("https://res.cloudinary.com/dq6tqnvbh/image/upload/q_auto,w_250,h_500,c_thumb,g_face,z_0.8/v1675538481/blog/Sveta-Slepner.jpg");

  @media (max-width: 700px) {
    width: 100%;
    height: 250px;
    background-image: url("https://res.cloudinary.com/dq6tqnvbh/image/upload/q_auto,w_700,h_250,c_thumb,g_auto,z_0.2/v1675538481/blog/Sveta-Slepner.jpg");
    background-position: bottom;
  }
`;

const AboutMePage = () => {
  return (
    <Layout>
      <PageTitle>About me</PageTitle>
      <ContentWrapper>
        <Content>
          <p>
            My name is Sveta Slepner, and i'm a front-end developer from Israel,
            and work as a front-end tech lead at Cloudinary.
          </p>
          <p>
            My programming journey began when I was 13, and really wanted to
            learn how to build my own website about Anime.
          </p>
          <p>
            I'm a self-tought developer, and enjoy expanding my skills and
            understanding of "how things work under the hood".
          </p>
          <p>
            I also like sharing my knowledge and insights with others, hence I
            created this blog :)
          </p>
          <p>
            You can also catch up with me on {" "}
            <a
              href="https://twitter.com/SlepnerSveta"
              title="twitter"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            ,{" "}
            <a
              href="https://www.linkedin.com/in/sveta-slepner-0b5b2b8b/"
              title="linkedin"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
            ,{" "}
            <a
              href="https://dev.to/svetaslepner"
              title="dev.to"
              target="_blank"
              rel="noreferrer"
            >
              dev.to
            </a>{" "}
            and{" "}
            <a
              href="https://medium.com/@sveta-slepner"
              title="medium"
              target="_blank"
              rel="noreferrer"
            >
              Medium
            </a>
            .
          </p>
        </Content>
        <Image />
      </ContentWrapper>
    </Layout>
  );
};

export default AboutMePage;

export const aboutMePageQuery = graphql`
  query BlogRollQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export const Head = ({ data }) => {
  return (
    <>
      <html lang="en" />
      <meta name="icon" type="image/x-icon" href={favicon} />
      <title>{`${data.site.siteMetadata.title} | About me`}</title>
    </>
  );
};
