module.exports = {
  siteMetadata: {
    title: `I like Google fonts`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/posts`,
        name: "posts",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Noto+Serif`, `B612+Mono`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {},
    },
  ],
};
