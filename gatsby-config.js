require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `nihil obstat`,
    siteTitleAlt: `chronoclast | nihil obstat`,
    siteLanguage: `es`
  },
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
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: process.env.GOOGLE_ANALYTICS_ID,
    //   },
    // },
    `gatsby-plugin-sitemap`,
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
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
