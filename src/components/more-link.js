import { Link } from 'gatsby'
import React from 'react'

const MoreLink = ({ itemLabel }) => (
    <p className="more-link">
        <a href="#">More { itemLabel }</a>
        <span aria-hidden="true"> ▾</span>
    </p>
)

export default MoreLink
