import React from 'react'

const MoreLink = ({ itemLabel }) => (
    <p className="more-link">
        <a href={ `/${ itemLabel }` }>More { itemLabel }</a>
        <span aria-hidden="true"> ▾</span>
    </p>
)

export default MoreLink
