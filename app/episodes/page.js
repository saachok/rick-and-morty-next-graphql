'use client';

import { useFetchData } from '@/hooks/useFetchData';
import { fetchSeasons } from '@/functions/dataFetching';

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
            {seasons.map((_, seasonIndex) => (
              <SeasonCard seasonIndex={seasonIndex + 1} key={seasonIndex} />
            ))}
          </>
        ) : (
          <>
            {INITIAL_STATE.map((_, seasonIndex) => (
              <SeasonCardSkeleton key={seasonIndex + 1} />
            ))}
          </>
        )}
      </div>
    </main>
  );
}
