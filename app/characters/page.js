'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { createQueryString } from '@/functions/navigation';
import { fetchCharacters } from '@/functions/dataFetching';

import Link from 'next/link';
import CharacterCard from '@/components/characters/CharacterCard';
import CharactersPagination from '@/components/characters/CharactersPagination';

import styles from '../../public/styles/characters/CharactersPage.module.scss';
import CharacterCardSkeleton from '@/components/UI/skeletons/CharacterCardSkeleton';

const INITIAL_STATE = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

const Characters = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState(INITIAL_STATE);
  const [totalPages, setTotalPages] = useState();
  let pageNumber = +searchParams.get('page') ? +searchParams.get('page') : 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { results, info } = await fetchCharacters(pageNumber);
        setCharacters(results);
        setTotalPages(info.pages);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [pageNumber]);

  const goToPage = pageNumber => {
    router.push(
      pathname + '?' + createQueryString(searchParams, 'page', pageNumber)
    );
  };

  if (pageNumber < 1) goToPage(1);

  return (
    <main className={styles.container}>
      <div className={styles.grid}>
        {!isLoading ? (
          <>
            {characters.map(({ id, name, image, species }) => (
              <div key={id} className={styles['grid-item']}>
                <Link className={styles.link} href={`/character/${id}`}>
                  <CharacterCard {...{ name, image, species }} />
                </Link>
              </div>
            ))}
          </>
        ) : (
          <>
            {INITIAL_STATE.map(({ id }) => (
              <div key={id} className={styles['grid-item']}>
                <CharacterCardSkeleton />
              </div>
            ))}
          </>
        )}
      </div>
      {!isLoading && (
        <CharactersPagination
          pagesTotal={totalPages}
          pageNumber={pageNumber}
          goToPage={goToPage}
        />
      )}
    </main>
  );
};

export default Characters;
