import { Link } from 'gatsby'
import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import Img from 'gatsby-image'

const Feature = ({ subhead, title, description, extendedDescription = '', path, image, imageAlt = '' }) => (
    <section className={`feature`}>
        <Img fluid={ image } alt={ imageAlt } />
        <div className="breathing-room">
            <h2 className="subhead">{ subhead }</h2>
            <h3><Link to={ path }>{ title }</Link></h3>
            <p>{ ReactHtmlParser(description) }</p>
            {extendedDescription.length > 0 && 
                ReactHtmlParser(extendedDescription)
            }
        </div>
    </section>
)

export default Feature
