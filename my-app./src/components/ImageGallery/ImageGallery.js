import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import style from './ImageGallery.module.css'

const ImageGallery = ({ images }) => {

return (
    <ul className={style.ImageGallery}>
               {images.map(image => (
              <ImageGalleryItem 
              src={image.webformatURL}
              alt={image.tags}
              key={image.id} 
              >
            </ImageGalleryItem>  
            ))}
       
</ul>

);
};

export default ImageGallery;