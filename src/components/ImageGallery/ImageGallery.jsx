import React from 'react';
import ImageCard from "../ImageCard/ImageCard";
import styles from './ImageGallery.module.css';


const ImageGallery = ({ images }) => {
  return (
    <ul className={styles.gallery}>
      {images.map(image => (
        <li key={image.id} className={styles.item}>
          <ImageCard imageUrl={image.urls.small} altText={image.alt_description} />
        </li>
      ))}
    </ul>
  );
};


export default ImageGallery;



