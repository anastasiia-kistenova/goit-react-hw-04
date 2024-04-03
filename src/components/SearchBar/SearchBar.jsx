import React, { useState } from 'react';
import toast from 'react-hot-toast';
import styles from './SearchBar.module.css'
import { FaSearch } from 'react-icons/fa';

function SearchBar({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim() === '') {
      toast.error('Please enter a search term', {
      style: {
        marginTop:'50px'
      }
    });
    } else {
      onSubmit(searchTerm);
    }
  };

  return (
    <header className={styles.searchBarContainer}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.searchInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch className={styles.searchIcon} />
        <button className={styles.btnSearch} type="submit">Search</button>
      </form>
    </header>
  );
}



export default SearchBar;

