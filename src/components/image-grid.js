import PropTypes from 'prop-types'
import React from 'react'
import Img from 'gatsby-image'

const imageMap = {
  'gallery__0091': 'Presenting at ReactRally',
  'gallery__0078': 'Gravel cycling in the Chuckanuts',
  'gallery__0193': 'Homemade Berry pie with a lattice top',
  'gallery__0271': 'Reflective lake in Glacier National Park',
  'gallery__0252': 'Rainier the labradoodle in the Oregon wilderness',
  'gallery__0228': 'Me transitioning my splitboard after a large snowy climb in Austria',
  'gallery__0123': 'The day I won an O\'Reilly Web Platform Award',
  'gallery__0188': 'Yes, I do own a pair of overalls for doing yard work...'
}

const ImageGrid = ({ className, subtitle, images }) => (

    <div className={`media-grid image-grid breathing-room ${className}`}>
      <h2 className="visually-hidden">
        {subtitle}
      </h2>
      <ul>{ images.map((image, index) => {
        return <li key={`image-${index}`}>
          <Img fluid={image.node.childImageSharp.fluid} alt={imageMap[image.node.name]} />
        </li>
      })}</ul>
  </div>
)

ImageGrid.propTypes = {
  images: PropTypes.array,
}

ImageGrid.defaultProps = {
  images: [],
}

export default ImageGrid
