import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `dev mohib portfolio`,
    siteUrl: `https://dev-mohib.github.io`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss", 
  // {
  //   resolve: 'gatsby-plugin-google-analytics',
  //   options: {
  //     "trackingId": ""
  //   }
  // },
  {
    resolve: "gatsby-source-hashnode",
    options: {
      username: "rehansattar",
    },
  },
  "gatsby-plugin-image", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/favicon.ico"
    }
  }, 
  "gatsby-plugin-sharp", 
  "gatsby-transformer-sharp", 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
  "gatsby-transformer-remark",
  {
    resolve: `gatsby-source-sanity`,
    options: {
      projectId: `6mtfqx88`,
      dataset: `production`,
      // a token with read permissions is required
      // if you have a private dataset
      token: process.env.SANITY_TOKEN,

      // If the Sanity GraphQL API was deployed using `--tag <name>`,
      // use `graphqlTag` to specify the tag name. Defaults to `default`.
      graphqlTag: 'default',
    },
  },
]
};

export default config;
