import React from 'react'
import BodyClassName from 'react-body-classname'

// import RouteTargetHeading from "../components/route-target-heading"
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Timeline } from 'react-twitter-widgets'

const ContactPage = ({ data }) => (
    <BodyClassName className="page">
        <Layout>
            <SEO title="Contact" keywords={['Marcy Sutton', 'contact', 'web developer']} />
            <div className="generic-wrap page-post-wrap">
                <section className="page-post-detail contact-detail">
                    <h1>
                        Holla Back
                    </h1>
                    <div>
                        {/* <p>This form is temporarily disabled while I migrate my website; please contact me <a href="https://twitter.com/marcysutton" target="_blank" rel="noopener noreferrer" title="Link opens in a new window">on Twitter</a> in the meantime. Thank you for your patience!</p> */}
                        <p><em>Want to get in touch? Fill out this form, and I’ll do my best to get back to you.</em></p>
                        <p><strong>All fields are required.</strong></p>
                        <div role="form" lang="en-US" dir="ltr">
                            <div className="screen-reader-response"></div>
                            <form disabled key="contact-form" action="/thanks/" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="pooh-field">
                                <p style={{ display: `none` }}>
                                    <label>Don’t fill this out if you're human: <input name="pooh-field" /></label>
                                </p>
                                <div className="response-output display-none"></div>
                                <p>
                                    <label htmlFor="name">Your Name</label><br />
                                    <input type="text" name="name" size="40" id="name" required="true" />
                                </p>
                                <p>
                                    <label htmlFor="email">Your Email</label><br />
                                    <input type="email" name="email" size="40" id="email" required="true" />
                                </p>
                                <p>
                                    <label htmlFor="subject">Your Subject</label><br />
                                    <input type="text" name="subject" size="40" id="subject" required="true" />
                                </p>
                                <p>
                                    <label htmlFor="message">Your Message</label><br />
                                    <textarea name="message" cols="40" rows="10" id="message" required="true"></textarea>
                                </p>
                                <p><input type="submit" value="Send" /></p>
                                <input type="hidden" name="form-name" value="contact" />
                            </form>
                        </div>
                    </div>
                </section>
                <aside className="contact-aside breathing-room">
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
                    />
                </aside>
            </div>
        </Layout>
    </BodyClassName>
)

export default ContactPage;