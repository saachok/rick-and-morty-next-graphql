'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { client } from '../../graphql/graphql-client';
import getCharactersQuery from '@/graphql/queries/characters/getCharacters';
import { createQueryString } from '@/functions/navigation';

import Link from 'next/link';
import CharacterCard from '@/components/characters/CharacterCard';
import CharactersPagination from '@/components/characters/CharactersPagination';
import Loading from '@/components/UI/Loading';

import styles from '../../public/styles/characters/CharactersPage.module.scss';

export default function Characters() {
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState([]);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  let pageNumber = +searchParams.get('page') ? +searchParams.get('page') : 1;

  const fetchCharacters = useCallback(async () => {
    const data = await client.request(getCharactersQuery, {
      page: pageNumber ? +pageNumber : 1,
    });
    const { results } = data.characters;
    return results;
  }, [pageNumber]);

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
  }, [pageNumber, fetchCharacters]);

  const goToPage = pageNumber => {
    router.push(
      pathname + '?' + createQueryString(searchParams, 'page', pageNumber)
    );
  };

  if (pageNumber < 1) goToPage(1);

  return (
    <main className={styles.container}>
      {characters && !isLoading ? (
        <>
          <div className={styles.grid}>
            {characters.map(({ id, name, image, species }) => (
              <Link className={styles.link} key={id} href={`/character/${id}`}>
                <CharacterCard {...{ name, image, species }} />
              </Link>
            ))}
          </div>
          <CharactersPagination pageNumber={pageNumber} goToPage={goToPage} />
        </>
      ) : (
        <Loading />
      )}
    </main>
  );
}
