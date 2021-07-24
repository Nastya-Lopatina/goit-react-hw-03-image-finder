import React from 'react';
import ImageGalleryItem from './ImageGalleryItem'

const ImageGallery = ({images,openModal}) =>{
return (
    <ul className="ImageGallery">
        <li>
            {images.map(image => (
              <ImageGalleryItem openModal={openModal} key={image.id} image={image}></ImageGalleryItem>  
            ))}
        </li>
   </ul>

);
};

export default ImageGallery;