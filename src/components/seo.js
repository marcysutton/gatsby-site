import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, keywords, image, title, player }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const seo = {
          description: description || data.site.siteMetadata.socialDescription,
          image: `${image || data.site.siteMetadata.defaultImage}`,
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
                content: seo.image,
              },
              {
                property: 'og:type',
                content: 'website',
              },
              {
                name: 'twitter:card',
                content: 'summary',
              },
              {
                name: 'twitter:creator',
                content: data.site.siteMetadata.author,
              },
              {
                name: 'twitter:title',
                content: pageTitle,
              },
              {
                name: 'twitter:image',
                content: seo.image,
              },
              {
                name: 'twitter:description',
                content: seo.description,
              },
              {
                property: 'twitter:player',
                content: player,
              },
            ]
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
            <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
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
        defaultImage
        twitterUsername
        socialDescription
      }
    }
  }
`
