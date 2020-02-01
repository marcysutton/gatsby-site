import { Link } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'

const Feature = ({ subhead, title, description, path, image }) => (
    <section className={`feature`}>
        <Img fluid={ image } alt="" />
        <div className="breathing-room">
            <h2 className="subhead">{ subhead }</h2>
            <h3><Link to={ path }>{ title }</Link></h3>
            <p>{ description }</p>
        </div>
    </section>
)

export default Feature
