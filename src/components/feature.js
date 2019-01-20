import { Link } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'

const Feature = ({ image, subtitle }) => (
    <section className={`feature`}>
        <Img fluid={image} alt="" />
        <div>
            <h2 className="subhead">{ subtitle }</h2>
            <h3><a href="#">Smashing Book 6: New Frontiers in Web Design</a></h3>
            <p>I wrote a chapter in the latest Smashing Book on Accessibility in Single-Page Applications</p>
        </div>
    </section>
)

export default Feature
