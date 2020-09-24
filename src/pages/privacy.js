import React from 'react'
import BodyClassName from 'react-body-classname'
import { Link } from 'gatsby'

import RouteTargetHeading from "../components/route-target-heading"
import Layout from '../components/layout'
import SEO from '../components/seo'

const PrivacyPage = () => (
    <BodyClassName className="page">
        <Layout>
            <SEO title="Privacy Policy" keywords={['Marcy Sutton', 'privacy policy', 'web developer']} />
            <section className="generic-wrap">
                <div className="breathing-room">
                    <RouteTargetHeading>
                        Privacy Policy
                    </RouteTargetHeading>
                    <p>Like some other website owners, I <strong>don't</strong> use Google Analytics on marcysutton.com because I really don't need it. So, we can skip that part!</p>

                    <h2>Why do I want your email address?</h2>
                    <p>I've recently added a <Link to="/contact#newsletter-signup">newsletter signup form</Link> to allow readers like yourself to opt-in to email updates from me. As I publish new blog posts, educational courses, and relevant accessibility material, I will plan to send out emails periodically using the <a href="https://app.convertkit.com/">Convert Kit</a> platform.</p>
                    <p>This website also has a contact form for you to get in touch with me by providing your name, email address, and a message.</p>
                    <p>I will not, under any circumstances, share your email or personal information with anyone. Aside from responding to a message you've sent to me, your email address will only be used to send relevant email updates, and you can opt out of your subscription at any time using the unsubscribe links in every email. But I also understand that feelings change, and receiving less email is sometimes a necessary maneuver. If you unsubscribe, no hard feelings. My website will also always be here for you to find out what I'm up to.</p>
                    
                    <h2>Is there anything else you should know?</h2>
                    <p>This website is pretty straight-forward in features, with a focus on written and video content. There may be some JavaScript resources loaded from third-party domains due to widgets used in the code, such as Twitter for my embedded tweets and video players from YouTube and Vimeo. You can refer to their privacy policies for more details if you'd like:</p>
                    <ul>
                        <li>
                            <a href="https://developer.twitter.com/en/docs/twitter-for-websites/privacy">Twitter Privacy Policy</a>
                            <ul>
                                <li>Note: Do Not Track is enabled on this website</li>
                            </ul>
                        </li>
                        <li>
                            <a href="https://policies.google.com/privacy">Google/YouTube Privacy</a>
                            <ul>
                                <li>Note: Privacy mode was used wherever possible.</li>
                            </ul>
                        </li>
                        <li><a href="https://vimeo.com/privacy">Vimeo Privacy</a></li>
                    </ul>
                    <p>If you have any questions or concerns about privacy as it relates to this website, feel free to <Link to="/contact">get in touch</Link>.</p>
                </div>
            </section>
        </Layout>
    </BodyClassName>
)

export default PrivacyPage 