import React from 'react'
import BodyClassName from 'react-body-classname'

import Layout from '../components/layout'
import SEO from '../components/seo'

const PrivacyPage = () => (
    <BodyClassName className="page">
        <Layout>
            <SEO title="Privacy Policy" keywords={['Marcy Sutton', 'privacy policy', 'web developer']} />
            <section className="generic-wrap breathing-room">
                <h1>Privacy Policy</h1>
                <p>Like many other website owners, I use Google Analytics on marcysutton.com.</p>
                <p>Google Analytics is a piece of software that grabs data about my visitors (you). It’s something like an advanced server log.</p>
                <h2>What does Google Analytics record?</h2>
                <ul>
                    <li>What website you came from to get here.</li>
                    <li>How long you stay for.</li>
                    <li>What kind of computer you’re using.</li>
                    <li>And quite a bit more.</li>
                </ul>
                <h2>What do I do with your data?</h2>
                <p>The tracking information allows me to better understand the kind of people who come to my site and what content they’re reading. This allows me to make better decisions about design and writing, as well as my website’s security.</p>
                <p>Occasionally, I will compile aggregate statistics about the number of visitors this site receives and browsers being used. No personally identifying data is included in this type of reporting.</p>
                <p>All of my activity falls within the bounds of the <a href="http://www.google.com/analytics/tos.html">Google Analytics Terms of Service</a>.</p>
                <h2>Want to opt out of tracking?</h2>
                { /* TODO: enable opt-out */ }
                <p><a className="gaoo-opt-out google-analytics-opt-out" href="#">Opt out of tracking</a> (sets a cookie to disable my tracking).&nbsp;<em>This only works on marcysutton.com</em>.</p>
                <p>You can also <a href="http://www.google.com/privacy_ads.html">opt out of Google’s advertising tracking cookie</a> or <a href="http://tools.google.com/dlpage/gaoptout?hl=en">use a browser plugin to opt out of all Google Analytics tracking software</a>.</p>
            </section>
        </Layout>
    </BodyClassName>
)

export default PrivacyPage