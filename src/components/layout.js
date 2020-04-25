import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import 'typeface-roboto'

import '../css/default.css'
import Header from './header'
import Footer from './footer'

const Layout = ({ children, pathname }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title,
            description
          }
        }
      }
    `}
    render={data => (
      <div id="site-wrap">
        <Header
          siteTitle={data.site.siteMetadata.title}
          pathname={pathname}
        />
        <svg style={{
          position: `absolute`,
          width: `0`,
          height: `0`,
          overflow: `hidden`
         }}
         aria-hidden="true" focusable="false">
          <defs>
          <symbol id="icon-triangle-right" width="1024" height="1024" viewBox="0 0 1024 1024">
            <path d="M1024 512l-921.6 512v-1024l921.6 512z"></path>
            </symbol>
          </defs>
        </svg>
        <main
          id="main"
          role="main"
          tabIndex="-1"
        >
          {children}
        </main>
        <Footer />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
