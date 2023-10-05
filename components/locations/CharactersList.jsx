'use client';

import React, { useState } from 'react';
import CharacterCard from '@/components/characters/CharacterCard';
import styles from '@/public/styles/locations/CharactersList.module.scss';
import PaginationMenu from '@/components/UI/pagination/PaginationMenu';

function CharacterList({ characters }) {
  const [currentPage, setCurrentPage] = useState(1);
  const charactersPerPage = 20;

  const startIndex = (currentPage - 1) * charactersPerPage;
  const endIndex = startIndex + charactersPerPage;

  const charactersToDisplay = characters.slice(startIndex, endIndex);

  const totalPages = Math.ceil(characters.length / charactersPerPage);

  const handlePageChange = page => {
    setCurrentPage(page);
    (function scrollToTop() {
      window.scrollTo({
        top: 280,
        behavior: 'smooth',
      });
    })();
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
            <PaginationMenu
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
