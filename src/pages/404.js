import React from 'react'
import BodyClassName from 'react-body-classname'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Video from '../components/video'

const NotFoundPage = () => (
  <BodyClassName className="page">
    <Layout>
      <SEO title="404: Not found" />
      <section className="generic-wrap breathing-room">
        <h1>NOT FOUND</h1>
        <p>You just hit a page that doesn&#39;t exist... the sadness.</p>
        <p>May I suggest a video instead?</p>
        <Video videoSrcURL="https://www.youtube-nocookie.com/embed/iJ4T9CQA0UM" videoTitle="Guy on a Buffalo on YouTube" />
      </section>
    </Layout>
  </BodyClassName>
)

export default NotFoundPage
