'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { client } from '../../graphql/graphql-client';
import getCharactersQuery from '@/graphql/queries/characters/getCharacters';
import CharacterCard from '@/components/characters/CharacterCard';

import styles from '../../public/styles/characters/CharactersPage.module.scss';
import CharactersPagination from '@/components/characters/CharactersPagination';
import Loading from '@/components/UI/Loading';

export default function Characters() {
  const [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    const data = await client.request(getCharactersQuery, { page: pageNumber });
    const { results } = data.characters;
    return results;
  };

  useEffect(() => {
    setIsLoading(true);
    fetchCharacters()
      .then(data => {
        setCharacters(data);
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      });
  }, [pageNumber]);

  return (
    <main className={styles.container}>
      {characters && !isLoading ? (
        <>
          <div className={styles.grid}>
            {characters.map(({ id, name, image, species }) => (
              <Link className={styles.link} key={id} href={`/characters/${id}`}>
                <CharacterCard {...{ name, image, species }} />
              </Link>
            ))}
          </div>
          <CharactersPagination
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          />
        </>
      ) : (
        <Loading />
      )}
    </main>
  );
}
