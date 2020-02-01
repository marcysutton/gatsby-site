import React, { Component } from "react"
import ReactHtmlParser from 'react-html-parser'
import BodyClassName from 'react-body-classname'
import PropTypes from "prop-types"

import RouteTargetHeading from "../components/route-target-heading"
import SEO from '../components/seo'
import Layout from '../components/layout'

class PageTemplate extends Component {
  render() {
    const page = {
      title: '',
      content: ''
    }
    
    return (
      <BodyClassName className="page">
        <Layout pathname={this.props.location.pathname}>
          <SEO title={ page.title } keywords={['Marcy Sutton', 'MarcySutton.com', 'writing', 'pages', 'blog']} />
          <section className="generic-wrap page-wrap">
            <article className="breathing-room">
                <RouteTargetHeading targetID="global-nav">
                  { ReactHtmlParser(page.title) }
                </RouteTargetHeading>
                { ReactHtmlParser(page.content) }
            </article>
          </section>
        </Layout>
      </BodyClassName>
    )
  }
}

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PageTemplate
