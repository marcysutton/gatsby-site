import React from 'react'
import { graphql } from 'gatsby'
import BodyClassName from 'react-body-classname'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Timeline } from 'react-twitter-widgets'

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
                    <Timeline
                        dataSource={{
                            sourceType: 'profile',
                            screenName: 'marcysutton'
                        }}
                        options={{
                            username: 'marcysutton',
                            height: '800'
                        }}
                        onLoad={() => console.log('Timeline is loaded!')}
                    />
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