import React from 'react'
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
                    <div>
                        <p>This form is temporarily disabled while I move my website. Thank you for your patience!</p>
                        {/* <p><em>Want to get in touch? Fill out this form, and I’ll do my best to get back to you.</em></p> */}
                        {/* <p><strong>All fields are required.</strong></p> */}
                        <div role="form" className="wpcf7" id="wpcf7-f2138-o1" lang="en-US" dir="ltr">
                            <div className="screen-reader-response"></div>
                            <form action="/wp-json/wp/v2/pages?per_page=100&amp;page=1#wpcf7-f2138-o1" disabled method="post" className="wpcf7-form" noValidate="novalidate">
                            {/* <div style="display: none;">
                                <input type="hidden" name="_wpcf7" defaultValue="2138" />
                                <input type="hidden" name="_wpcf7_version" defaultValue="4.7" />
                                <input type="hidden" name="_wpcf7_locale" defaultValue="en_US" />
                                <input type="hidden" name="_wpcf7_unit_tag" defaultValue="wpcf7-f2138-o1" />
                                <input type="hidden" name="_wpnonce" defaultValue="337f01b717" />
                            </div> */}
                            <div className="wpcf7-response-output wpcf7-display-none"></div>
                            <p>
                                <label htmlFor="your-name">Your Name</label><br />
                                <span className="wpcf7-form-control-wrap your-name">
                                    <input disabled type="text" name="your-name" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" id="your-name" aria-required="true" aria-invalid="false" />
                                </span>
                            </p>
                            <p>
                                <label htmlFor="your-email">Your Email</label><br />
                                <span className="wpcf7-form-control-wrap your-email">
                                    <input disabled type="email" name="your-email" size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" id="your-email" aria-required="true" aria-invalid="false" />
                                </span>
                            </p>
                            <p>
                                <label htmlFor="your-subject">Your Subject</label><br />
                                <span className="wpcf7-form-control-wrap your-subject">
                                    <input disabled type="text" name="your-subject" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" id="your-subject" aria-required="true" aria-invalid="false" />
                                </span>
                            </p>
                            <p>
                                <label htmlFor="your-message">Your Message</label><br />
                                <span className="wpcf7-form-control-wrap your-message">
                                    <textarea disabled name="your-message" cols="40" rows="10" className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required" id="your-message" aria-required="true" aria-invalid="false"></textarea>
                                </span>
                            </p>
                            <p><input type="submit" disabled value="Send" className="wpcf7-form-control wpcf7-submit" /></p>
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
                        onLoad={() => console.log('Timeline is loaded!')}
                    />
                </aside>
            </div>
        </Layout>
    </BodyClassName>
)

export default ContactPage;