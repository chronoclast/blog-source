import type { GatsbyConfig } from "gatsby"
import "dotenv/config"

const config: GatsbyConfig = {
  siteMetadata: {
    siteTitle: `nihil obstat`,
    siteTitleAlt: `chronoclast | nihil obstat`,
    siteHeadline: `chronoclast | nihil obstat`,
    siteUrl: `https://chronoclast.github.io`,
    siteDescription: `Sea imprimido.`,
    siteImage: `/banner.jpg`,
    siteLanguage: `es`,
    author: `chronoclast`,
  },
  trailingSlash: `always`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Artículos`,
            slug: `/blog`,
          },
          {
            title: `Sobre mí`,
            slug: `/sobre-mi`,
          },
        ],
        externalLinks: [
          {
            name: `Bandcamp`,
            url: `https://bandcamp.com/scythecut`,
          },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/jimtonic/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `chronoclast | nihil obstat`,
        short_name: `nihil obstat`,
        description: `Sea imprimido.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}

export default config
