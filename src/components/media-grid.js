import PropTypes from 'prop-types'
import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import MoreLink from './more-link';

const MediaGrid = ({ className, subtitle, items, allItems, itemLabel, minItems = 8 }) => (
    <div className={`media-grid breathing-room ${className}`}>
      <h2 className="subhead">
        {subtitle}
      </h2>
      <ul>{ items.map((items) => {
        return <li key={ items.node.id }>
          <Link to={ items.node.frontmatter.path }>
            <Img fluid={items.node.frontmatter.posterImg.childImageSharp.fluid} alt="" />
            {
              ReactHtmlParser(items.node.frontmatter.title)
            }
          </Link>
        </li>
      }) 
    }</ul>
    { allItems ? null : 
      <MoreLink itemLabel={itemLabel} />
    }
    </div>
)

MediaGrid.propTypes = {
  items: PropTypes.array,
}

MediaGrid.defaultProps = {
  items: [],
}

export default MediaGrid
