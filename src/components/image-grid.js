import PropTypes from 'prop-types'
import React from 'react'

const ImageGrid = ({ className, subtitle, images, imagePath }) => (
    <div className={`media-grid image-grid ${className}`}>
      <h2 className="visually-hidden">
        {subtitle}
      </h2>
      <ul>{ images.map((image, index) => {
        return <li key={`image-${index}`}>
          <img src={`${imagePath}/${image.name}`} alt={image.alt} />
        </li>
      })
    }</ul>
    </div>
)

ImageGrid.propTypes = {
  images: PropTypes.array,
}

ImageGrid.defaultProps = {
  images: [],
}

export default ImageGrid
