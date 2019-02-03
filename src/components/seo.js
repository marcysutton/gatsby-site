import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, keywords, image, socialDescription, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const seo = {
          title: title || data.site.siteMetadata.title,
          description: description,
          image: `${image || data.site.siteMetadata.defaultImage}`,
        }
        const metaDescription =
          description || data.site.siteMetadata.description
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={seo.title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: 'description',
                content: metaDescription,
              },
              {
                property: 'og:title',
                content: seo.title,
              },
              {
                property: 'og:description',
                content: socialDescription,
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
                content: seo.title,
              },
              {
                name: 'twitter:image',
                content: seo.image,
              },
              {
                name: 'twitter:description',
                content: socialDescription,
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
          />
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
