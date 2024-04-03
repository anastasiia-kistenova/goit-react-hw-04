import React from 'react';
import styles from './ImageCard.module.css';


const ImageCard = ({ imageUrl, altText, onClick }) => {
  return (
    <div className={styles.card} >
      <img src={imageUrl} alt={altText} className={styles.image} onClick={onClick} />
    </div>
  );
};


export default ImageCard;



