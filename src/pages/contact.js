import React from 'react'
import { graphql } from 'gatsby'
import BodyClassName from 'react-body-classname'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ContactPage = ({ data }) => (
    <BodyClassName className="page">
        <Layout>
            <SEO title="Contact" keywords={['Marcy Sutton', 'contact', 'web developer']} />
            <div className="generic-wrap page-post-wrap">
                <section className="page-post-detail contact-detail">
                    <h1>Holla Back</h1>
                    {
                        data.allWordpressPage.edges.map((pages) => {
                            if ( pages.node.slug === 'contact' ) {
                                return <div
                                    key={pages.node.id}
                                    dangerouslySetInnerHTML={{ __html: pages.node.content }}
                                ></div>
                            }
                            return ''
                        })
                    }
                </section>
                <aside className="contact-aside">
                    <h2>The latest</h2>
                    <a className="twitter-timeline" href="https://twitter.com/marcysutton" data-widget-id="314446056236650496">
                        Tweets by @marcysutton
                    </a>
                    {!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs")}
                </aside>
            </div>
        </Layout>
    </BodyClassName>
)

export const query = graphql`
  query {
    allWordpressPage {
        edges {
          node {
            id
            slug
            content
          }
        }
      }
  }
`

export default ContactPage;