import React from 'react'
import BodyClassName from 'react-body-classname'
import { Link } from 'gatsby'

import RouteTargetHeading from "../components/route-target-heading"
import Layout from '../components/layout'
import SEO from '../components/seo'

const ServicesPage = () => {
    return (
        <BodyClassName className="page">
            <Layout>
                <SEO title="Accessible Web Development Services" keywords={['Marcy Sutton', 'web accessibility expert', 'single page app accessibility', 'JavaScript accessibility', 'accessibility consultant', 'independent UI developer', 'freelance web developer']} />
                <div className="generic-wrap page-post-wrap">
                    <section className="page-post-detail">
                        <RouteTargetHeading>
                            Accessible Web Development Services
                        </RouteTargetHeading>
                        
                        <p>I engage with development teams and companies to foster web accessibility at tech organizations.</p>
                        <p>I can consult on accessibility of websites and JavaScript applications. I can deliver specialized talks and workshops to educate team members and make accessibility learning stick. I can review and prototype designs for accessibility to provide feedback at early stages. I can engineer more robust solutions using manual and automated testing along the way. I can also create documentation to make these processes repeatable and communicate with internal teams or the public.</p>
                        <h2>My specialties are:</h2>
                        <ul>
                            <li>Web accessibility office hours</li>
                            <li>Talks and workshops</li>
                            <li>Web user interface engineering</li>
                            <li>Manual and automated testing</li>
                            <li>Engineering of automated accessibility testing tools</li>
                            <li>Video tutorials</li>
                            <li>Design reviews</li>
                            <li>Prototyping with code</li>
                            <li>Documentation and PR reviews</li>
                        </ul>
                        <h2>How to get in touch</h2>
                        <p>Looking to hire me through my LLC for one of the above specialties? Wonderful! Send me an email through my contact page, and I’ll do my best to get back to you as soon as I can: <Link to="/contact">https://marcysutton.com/contact</Link></p>
                        <p>A note about availability: I'm typically booked a quarter or two in advance. If you need help right away, you can also hire me for hourly consulting through Superpeer, a video call service: <a href="https://superpeer.com/marcysutton">https://superpeer.com/marcysutton</a></p>
                        
                        <h2>A note about audits</h2>
                        <p>I’m not currently taking on any <a href="https://en.wikipedia.org/wiki/Web_accessibility#Website_accessibility_audits">accessibility site or app audits</a>, as they’re not my jam. If you’re looking to have this sort of work done, I’d recommend contacting <a href="https://knowbility.org/">Knowbility</a>, <a href="https://www.levelaccess.com/">Level Access</a>, or <a href="https://deque.com">Deque Systems</a>.</p>
                        <p>Note: if you’re a disabled accessibility testing / auditing consultant who’d like to be recommended on this page, <Link to="/contact">let me know</Link>!</p>
                    </section>
                    <aside className="page-post-aside breathing-room">

                        <h2>In the meantime&hellip;</h2>
                        <p>I have some accessibility training available online. Check out these resources:</p>
                        <ul>
                            <li>Chrome Dev Summit workshop: <a href="https://developer.chrome.com/devsummit/schedule/#workshops" target="_blank" rel="noopener noreferrer" title="Opens in a new window">JavaScript Accessibility</a>.<br /><strong>Dec. 7-8, 2020</strong></li>
                            <li>Smashing Magazine workshop: <a href="https://smashingconf.com/online-workshops/workshops/marcy-sutton-nov" target="_blank" rel="noopener noreferrer" title="Opens in a new window">Frontend Accessibility Masterclass</a>.<br /><strong>Nov. 6-7, 2020</strong> (recordings available)</li>
                            <li>Frontend Masters video course: <a href="https://frontendmasters.com/courses/javascript-accessibility/" target="_blank" rel="noopener noreferrer" title="Opens in a new window">Accessibility in JavaScript Applications</a></li>
                            <li>Egghead video course: <a href="https://egghead.io/courses/start-building-accessible-web-applications-today" target="_blank" rel="noopener noreferrer" title="Opens in a new window">Start Building Accessible Web Applications Today</a></li>
                            <li>Accessibility chapter in <a href="https://www.smashingmagazine.com/2018/09/smashing-book-6-release/" target="_blank" rel="noopener noreferrer" title="Opens in a new window">Smashing Book 6: New Frontiers in Web Design</a></li>
                            <li><Link to="/web-accessibility-resources">Additional accessibility resources</Link></li>
                        </ul>
                        <h2>Some recent articles</h2>
                        <ul>
                            <li><Link to="/outsider-leverage-accessibility/">Outsider Leverage & Accessibility</Link></li>
                            <li><Link to="/live-coding-accessibility/">Live Coding Accessibility</Link></li>
                            <li><Link to="/links-vs-buttons-in-modern-web-applications">Links vs. Buttons in Modern Web Applications</Link></li>
                            <li><a href="https://www.gatsbyjs.com/blog/2019-07-11-user-testing-accessible-client-routing/" target="_blank" rel="noopener noreferrer" title="Opens in a new window">User testing of accessible client-side routing techniques with Fable Tech Labs (Gatsby blog)</a></li>
                        </ul>
                    </aside>
                </div>
            </Layout>
        </BodyClassName>
    )
}

export default ServicesPage;