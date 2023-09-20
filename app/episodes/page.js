'use client';

import { useFetchData } from '@/hooks/useFetchData';
import { fetchSeasons } from '@/functions/dataFetching';

import Link from 'next/link';
import SeasonCard from '@/components/episodes/SeasonCard';
import SeasonCardSkeleton from '@/components/UI/skeletons/SeasonCardSkeleton';

import styles from '../../public/styles/episodes/EpisodesPage.module.scss';

const INITIAL_STATE = [1, 2, 3, 4, 5];

export default function Episodes() {
  const { isLoading, data: seasons = [] } = useFetchData(fetchSeasons);

  return (
    <main className={styles.container}>
      <div className={styles.grid}>
        {!isLoading ? (
          <>
            {seasons.map((elem, seasonIndex) => (
              <div className={styles['grid-item']} key={seasonIndex + 1}>
                <Link
                  key={seasonIndex}
                  href={`/episodes/s0${seasonIndex + 1}`}
                  className={styles.link}
                >
                  <SeasonCard seasonIndex={seasonIndex + 1} />
                </Link>
              </div>
            ))}
          </>
        ) : (
          <>
            {INITIAL_STATE.map((elem, seasonIndex) => (
              <div className={styles['grid-item']} key={seasonIndex + 1}>
                <SeasonCardSkeleton />
              </div>
            ))}
          </>
        )}
      </div>
    </main>
  );
}
