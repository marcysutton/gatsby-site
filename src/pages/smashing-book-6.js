import React from 'react'
import BodyClassName from 'react-body-classname'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SmashingBook6Page = () => (
  <BodyClassName className="generic">
    <Layout>
        <SEO title="Smashing Book 6" keywords={['Marcy Sutton', 'Smashing Book 6', 'web developer']} />
        <section className="generic-wrap">
            <h1>Smashing Book 6: New Frontiers in Web Design</h1>
            <p>I wrote a book chapter on Accessibility in JavaScript Apps in the latest hardcover book from Smashing Magazine, New Frontiers in Web Design. WHOA!
    </p>
      </section>
    </Layout>
  </BodyClassName>
)

export default SmashingBook6Page
