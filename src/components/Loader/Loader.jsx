import React from 'react';
import { Circles } from 'react-loader-spinner'; 
import styles from './Loader.module.css'

function Loader() {
  return (
    <div className={styles.loader}>
      <Circles type="Puff" color="#00BFFF" height={60} width={60} />
    </div>
  );
}

export default Loader;
