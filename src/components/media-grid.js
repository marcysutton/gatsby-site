import PropTypes from 'prop-types'
import React from 'react'
import ReactHtmlParser from 'react-html-parser'

import MoreLink from './more-link';

const MediaGrid = ({ className, subtitle, items, itemLabel, directory, minItems = 8 }) => (
    <div className={`media-grid ${className}`}>
      <h2 className="subhead">
        {subtitle}
      </h2>
      <ul>{ items.map((items) => {
        return <li key={ items.node.id }>
          { ReactHtmlParser(items.node.excerpt) }
          <a href={`${ directory }/${ items.node.slug }`}>{
              ReactHtmlParser(items.node.title)
            }</a>
        </li>
      }) 
    }</ul>
    { items.length >= minItems ?
      <MoreLink itemLabel={itemLabel} />
    : null }
    </div>
)

MediaGrid.propTypes = {
  items: PropTypes.array,
}

MediaGrid.defaultProps = {
  items: [],
}

export default MediaGrid
