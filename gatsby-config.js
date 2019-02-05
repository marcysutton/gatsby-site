module.exports = {
  siteMetadata: {
    title: 'MarcySutton.com',
    description: 'Web Developer and Accessibility Advocate',
    author: '@marcysutton',
    twitterUsername: "@marcysutton",
    socialDescription: "Musings about code, accessibility, music, cycling and life.",
    defaultImage: `/site-images/ms-social-image-600.jpg`,
    siteUrl: `https://www.marcysutton.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      }
    },
    'gatsby-plugin-twitter',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/site-images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/src/gallery`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/site-images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: "markdown-posts",
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/talk-videos`,
        name: "markdown-talks",
      }
    },
    `gatsby-transformer-remark`,
    // {
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     // your wordpress source
    //     baseUrl: `104.248.233.194/wp`,
    //     protocol: `http`,
    //     // is it hosted on wordpress.com, or self-hosted?
    //     hostingWPCOM: false,
    //     // does your site use the Advanced Custom Fields Plugin?
    //     useACF: false,
    //     auth: {
    //       // If auth.user and auth.pass are filled, then the source plugin will be allowed
    //       // to access endpoints that are protected with .htaccess.
    //       htaccess_user: "your-htaccess-username",
    //       htaccess_pass: "your-htaccess-password",
    //       htaccess_sendImmediately: false,
    //     }
    //   }
    // },
    // {
    //   resolve: `gatsby-plugin-feed`,
    // },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
    //     // Puts tracking script in the head instead of the body
    //     head: false,
    //     // Setting this parameter is optional
    //     anonymize: true,
    //     // Setting this parameter is also optional
    //     respectDNT: true,
    //     // Avoids sending pageview hits from custom paths
    //     exclude: ["/preview/**", "/do-not-track/me/too/"],
    //     // Enables Google Optimize using your container Id
    //     optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
    //     // Enables Google Optimize Experiment ID
    //     experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
    //     // Set Variation ID. 0 for original 1,2,3....
    //     variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
    //     // Any additional create only fields (optional)
    //     sampleRate: 5,
    //     siteSpeedSampleRate: 10,
    //     cookieDomain: "marcysutton.com",
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline'
  ],
}
