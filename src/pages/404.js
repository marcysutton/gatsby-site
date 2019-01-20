import React from 'react'
import BodyClassName from 'react-body-classname'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <BodyClassName className="generic">
    <Layout>
      <SEO title="404: Not found" />
      <section className="generic-wrap">
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </section>
    </Layout>
  </BodyClassName>
)

export default NotFoundPage
