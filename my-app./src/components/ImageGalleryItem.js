import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem  = ({image,openModal}) => {
    const{webformatURL} = image;
    return(
        <li id = {image.id} onClick = {openModal} className="ImageGalleryItem">
          <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
        </li>

    )
};

ImageGalleryItem.propTypes = {
    image: PropTypes.shape({
        webformatURL: PropTypes.string,   
    })
}

export default ImageGalleryItem;