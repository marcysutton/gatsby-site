import React from 'react'
import BodyClassName from 'react-body-classname'

import RouteTargetHeading from "../components/route-target-heading"
import Layout from '../components/layout'
import SEO from '../components/seo'
import Video from '../components/video'

const NotFoundPage = () => (
  <BodyClassName className="page">
    <Layout>
      <SEO title="404: Not found" />
      <section className="generic-wrap">
        <div className="breathing-room">
          <RouteTargetHeading>
            NOT FOUND
          </RouteTargetHeading>
          <p>You just hit a page that doesn&#39;t exist... the sadness.</p>
          <p>May I suggest a video instead?</p>
          <Video videoSrcURL="https://www.youtube-nocookie.com/embed/iJ4T9CQA0UM" videoTitle="Guy on a Buffalo on YouTube" />
        </div>
      </section>
    </Layout>
  </BodyClassName>
)

export default NotFoundPage
