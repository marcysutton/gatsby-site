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
                        <p>This form is temporarily disabled while I migrate my website; please contact me <a href="https://twitter.com/marcysutton" target="_blank" rel="noopener noreferrer" title="Link opens in a new window">on Twitter</a> in the meantime. Thank you for your patience!</p>
                        {/* <p><em>Want to get in touch? Fill out this form, and I’ll do my best to get back to you.</em></p> */}
                        {/* <p><strong>All fields are required.</strong></p> */}
                        <div role="form" lang="en-US" dir="ltr">
                            <div className="screen-reader-response"></div>
                            <form action="" disabled method="post" noValidate="novalidate">
                            {/* <div style="display: none;">
                                <input type="hidden" name="_wpcf7" defaultValue="2138" />
                                <input type="hidden" name="_wpcf7_version" defaultValue="4.7" />
                                <input type="hidden" name="_wpcf7_locale" defaultValue="en_US" />
                                <input type="hidden" name="_wpcf7_unit_tag" defaultValue="f2138-o1" />
                                <input type="hidden" name="_wpnonce" defaultValue="337f01b717" />
                            </div> */}
                            <div className="response-output display-none"></div>
                            <p>
                                <label htmlFor="your-name">Your Name</label><br />
                                <span className="form-control-wrap your-name">
                                    <input disabled type="text" name="your-name" size="40" className="form-control text validates-as-required" id="your-name" aria-required="true" aria-invalid="false" />
                                </span>
                            </p>
                            <p>
                                <label htmlFor="your-email">Your Email</label><br />
                                <span className="form-control-wrap your-email">
                                    <input disabled type="email" name="your-email" size="40" className="form-control text email validates-as-required validates-as-email" id="your-email" aria-required="true" aria-invalid="false" />
                                </span>
                            </p>
                            <p>
                                <label htmlFor="your-subject">Your Subject</label><br />
                                <span className="form-control-wrap your-subject">
                                    <input disabled type="text" name="your-subject" size="40" className="form-control text validates-as-required" id="your-subject" aria-required="true" aria-invalid="false" />
                                </span>
                            </p>
                            <p>
                                <label htmlFor="your-message">Your Message</label><br />
                                <span className="form-control-wrap your-message">
                                    <textarea disabled name="your-message" cols="40" rows="10" className="form-control textarea validates-as-required" id="your-message" aria-required="true" aria-invalid="false"></textarea>
                                </span>
                            </p>
                            <p><input type="submit" disabled value="Send" className="form-control submit" /></p>
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