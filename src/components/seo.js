import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, keywords, image, title, player, shortTitle }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const seo = {
          description: description || data.site.siteMetadata.socialDescription,
          image: `${data.site.siteMetadata.siteUrl }${image || data.defaultImage.childImageSharp.fixed.src}`,
          fbImage: `${data.site.siteMetadata.siteUrl }${image || data.squareImage.childImageSharp.fixed.src}`
        }
        const defaultTitle = data.site.siteMetadata.title
        const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={ pageTitle }
            meta={[
              {
                name: 'description',
                content: seo.description,
              },
              {
                property: 'og:title',
                content: pageTitle,
              },
              {
                property: 'og:description',
                content: seo.description,
              },
              {
                property: 'og:image',
                content: seo.fbImage,
              },
              {
                property: 'og:url',
                content: seo.siteUrl,
              },
              {
                property: 'og:type',
                content: 'website',
              },
              {
                name: 'twitter:card',
                content: player ? 'player' : 'summary_large_image',
              },
              {
                name: 'twitter:creator',
                content: data.site.siteMetadata.author,
              },
              {
                name: 'twitter:title',
                content: shortTitle && shortTitle !== '' ? shortTitle : pageTitle,
              },
              {
                name: 'twitter:image',
                content: seo.image,
              },
              {
                name: 'twitter:description',
                content: seo.description,
              },
            ]
              .concat(
                player
                  ? [{
                      property: 'twitter:player',
                      content: player,
                    },
                    {
                      name: "twitter:player:width",
                      content: "480"
                    },
                    {
                      name: "twitter:player:height",
                      content: "480"
                    }]
                  : []
              )
              .concat(
                keywords.length > 0
                  ? {
                      name: 'keywords',
                      content: keywords.join(', '),
                    }
                  : []
              )
              .concat(meta)}
          >
            {/* <script src="https://cdn.polyfill.io/v2/polyfill.min.js" /> */}
          </Helmet>
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        twitterUsername
        socialDescription
        siteUrl
      }
    }
    defaultImage: file(relativePath: { eq: "ms-social-image-600.jpg" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    squareImage: file(relativePath: { eq: "marcy-sutton-com.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
