import React from "react"

import "./route-target-heading.css"

const RouteHeading = ({level = 1, targetID='global-nav', className='', children}) => {
    const Heading = `h${level}`;
    return (
        <Heading className={`routeSkipHeading ${className}`}>
            <a href={`#${targetID}`}
               id="skip-main"
               className="routeSkipLink"
               aria-label={`Skip to global navigation`}>
            </a>
            {children}
        </Heading>
    )
}
export default RouteHeading
