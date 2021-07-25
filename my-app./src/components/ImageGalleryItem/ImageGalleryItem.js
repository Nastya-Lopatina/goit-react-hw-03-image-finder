import React from 'react';
import PropTypes from 'prop-types';
import style from './ImageGalleryItem.module.css'

const ImageGalleryItem  = ({src,alt,toggleModal}) => {
    
    return(
        <li  className = {style.ImageGalleryItem}>
            <img
                onClick={toggleModal}
                src={src} 
                alt={alt}
                className={style.ImageGalleryItem_image} 
            />
        </li>

    )
};

ImageGalleryItem.propTypes = {
    smallImage: PropTypes.shape({
        webformatURL: PropTypes.string,   
    })
}

export default ImageGalleryItem;