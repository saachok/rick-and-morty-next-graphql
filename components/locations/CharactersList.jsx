'use client';

import React, { useState } from 'react';
<<<<<<< HEAD
import CharacterCard from '@/components/characters/CharacterCard'; // Import your CharacterCard component
import styles from '@/public/styles/locations/CharactersList.module.scss'; // Import your CSS styles
import CharactersPagination from '../characters/CharactersPagination';
=======
import CharacterCard from '@/components/characters/CharacterCard';
import styles from '@/public/styles/locations/CharactersList.module.scss';
import PaginationMenu from '../UI/pagination/PaginationMenu';
>>>>>>> feat/pagination

function CharacterList({ characters }) {
  const [currentPage, setCurrentPage] = useState(1);
  const charactersPerPage = 20;

<<<<<<< HEAD
  // Calculate the index range for characters to display on the current page
  const startIndex = (currentPage - 1) * charactersPerPage;
  const endIndex = startIndex + charactersPerPage;

  // Slice the characters array to get the characters for the current page
=======
  const startIndex = (currentPage - 1) * charactersPerPage;
  const endIndex = startIndex + charactersPerPage;

>>>>>>> feat/pagination
  const charactersToDisplay = characters.slice(startIndex, endIndex);

  const totalPages = Math.ceil(characters.length / charactersPerPage);

<<<<<<< HEAD
  // Function to handle page change
  const handlePageChange = page => {
    setCurrentPage(page);
=======
  const handlePageChange = page => {
    setCurrentPage(page);
    (function scrollToTop() {
      window.scrollTo({
        top: 280,
        behavior: 'smooth',
      });
    })();
>>>>>>> feat/pagination
  };

  return (
    <>
      {charactersToDisplay.length ? (
        <>
          <div className={styles.grid}>
            {charactersToDisplay.map(character => (
              <CharacterCard key={character.id} {...character} />
            ))}
          </div>
          <div className={styles.pagination}>
<<<<<<< HEAD
            <CharactersPagination
=======
            <PaginationMenu
>>>>>>> feat/pagination
              pagesTotal={totalPages}
              pageNumber={currentPage}
              goToPage={handlePageChange}
            />
          </div>
        </>
      ) : (
        <h2 className={styles['empty-list']}>
          Can&rsquo;t find any character at this location.
        </h2>
      )}
    </>
  );
}

export default CharacterList;
