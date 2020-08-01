import React from 'react'
import BodyClassName from 'react-body-classname'

// import RouteTargetHeading from "../components/route-target-heading"
import Layout from '../components/layout'
import SEO from '../components/seo'

const ThanksPage = ({ data }) => (
    <BodyClassName className="page">
        <Layout>
            <SEO title="Thanks" keywords={['Marcy Sutton', 'Accessibility', 'web developer']} />
            <section className="generic-wrap">
                <div className="breathing-room">
                    <h1>
                        Thanks for your submission!
                    </h1>

                    <p>I can't always respond to everyone, but I'll do my best to get back to you if and when I can. In the meantime, if it's urgent you can always reach me <a href="https://twitter.com/marcysutton" target="_blank" rel="noopener noreferrer">on Twitter</a>!</p>
                </div>
            </section>
        </Layout>
    </BodyClassName>
)

export default ThanksPage