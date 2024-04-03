import React, { forwardRef } from 'react';
import ImageCard from "../ImageCard/ImageCard";
import styles from './ImageGallery.module.css';
import { FaHeart, FaUser } from 'react-icons/fa'; 

const ImageGallery = forwardRef(({ images, onImageClick }, ref) => {
  const handleClick = (image) => {
    if (onImageClick) {
      onImageClick(image);
    }
  };

  return (
    <ul ref={ref} className={styles.gallery}>
      {images.map((image, index) => (
        <li key={index} className={styles.item}>
          <ImageCard
            imageUrl={image.urls.small}
            altText={image.alt_description}
            onClick={() => handleClick(image)} 
          />
          <div className={styles.imageInfo}>
            <span className={styles.likes}>
              <FaHeart /> Likes: {image.likes}
            </span>
            <span className={styles.author}>
              <FaUser /> Author: {image.user.name}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
});

ImageGallery.displayName = 'ImageGallery';

export default ImageGallery;
