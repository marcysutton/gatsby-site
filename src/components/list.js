import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import ReactHtmlParser from 'react-html-parser'

import MoreLink from './more-link'

const List = ({ className, listName, subtitle, items }) => (
    <div className={`list ${className}`}>
        <h2>{subtitle}</h2>
        <ul>{ items.map((items) => {
            return <li key={ items.node.id }>
                <h3><a href={items.node.link}>{
                    ReactHtmlParser(items.node.title)
                }</a></h3>
            </li>
            }) 
        }</ul>
        <MoreLink itemLabel={listName} />
    </div>
)

List.propTypes = {
  items: PropTypes.array,
}

List.defaultProps = {
  items: [],
}

export default List
