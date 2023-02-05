import React from "react";
import { graphql, Link } from "gatsby";
import styled, { ThemeProvider } from "styled-components";
import { useThemeSwitcher } from "../hooks/themeSwitcher";
import { GlobalStyles } from "../components/Layout/Layout.styles";
import favicon from '../static/favicon.ico';
import chrome192 from '../static/android-chrome-192x192.png';
import chrome512 from '../static/android-chrome-512x512.png';

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const ImgWrapper = styled.div`
  width: 100%;
  text-align: center;

  img {
    max-width: 100%;
  }
`;

const PageNotFoundTitle = styled.h1`
  font-size: 4rem;
  text-align: center;
  margin: 1rem 0;
  color: ${({ theme }) => theme.color};
  font-family: ${({ theme }) => theme.articleTitleFont};
`;

const PageNotFoundDescription = styled.div`
  font-size: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.color};
  font-family: ${({ theme }) => theme.articleTitleFont};

  a,
  a:visited,
  a:active {
    color: ${({ theme }) => theme.color};
  }
`;

const PageNotFound = () => {
  const { theme } = useThemeSwitcher();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PageWrapper>
        <ImgWrapper>
          <img
            src="https://res.cloudinary.com/dq6tqnvbh/image/upload/v1675521504/blog/redpanda.png"
            alt="page not found"
          />
        </ImgWrapper>
        <PageNotFoundTitle>404</PageNotFoundTitle>
        <PageNotFoundDescription>
          Whoops! This page doesn't exist. <br/> Grab a raspberry and{" "}
          <Link to="/">go back</Link>.
        </PageNotFoundDescription>
      </PageWrapper>
    </ThemeProvider>
  );
};

export default PageNotFound;

export const pageNotFoundPageQuery = graphql`
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
      <link rel="icon" type="image/x-icon" href={favicon} />
      <link rel="icon" href={chrome192} sizes="196x196" type="image/png" />
      <link rel="icon" href={chrome512} sizes="512x512" type="image/png" />
      <title>{`${data.site.siteMetadata.title} | 404 Not found`}</title>
    </>
  );
};
