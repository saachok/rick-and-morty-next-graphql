'use client';

import { useState, useEffect, useCallback } from 'react';

// import { useFetchData } from '@/hooks/useFetchData';
// import { getEpisodes } from '@/functions/dataFetching';

import getSeasonEpisodesQuery from '../../../graphql/queries/episodes/getSeasonEpisodes';
import { client } from '../../../graphql/graphql-client';
import EpisodeCard from '@/components/episodes/EpisodeCard';
import Link from 'next/link';

import { getEpisodePath } from '@/functions/navigation';

import styles from '../../../public/styles/episodes/SeasonPage.module.scss';
import EpisodeCardSkeleton from '@/components/UI/skeletons/EpisodeCardSkeleton';

const INITIAL_STATE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const SeasonPage = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [episodes, setEpisodes] = useState([]);
  const { season } = props.params;

  // const getSeasonNumber = async () => {
  //   const { season } = await props.params;
  //   return season;
  // };

  // const { isLoading, data: episodes = [] } = useFetchData(async () => {
  //   await getEpisodes(await getSeasonNumber());
  // });
  const getEpisodes = useCallback(async () => {
    const { episodes } = await client.request(getSeasonEpisodesQuery, {
      filter: { episode: season },
    });
    return episodes.results;
  }, [season]);

  useEffect(() => {
    setIsLoading(true);
    getEpisodes()
      .then(data => {
        setEpisodes(data);
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      });
  }, [getEpisodes]);

  return (
    <main className={styles.container}>
      <div className={styles.grid}>
        {!isLoading ? (
          <>
            {episodes.map(({ id, name, episode, air_date }) => (
              <div key={id} className={styles['grid-item']}>
                <Link
                  href={getEpisodePath(season, episode)}
                  className={styles.link}
                >
                  <EpisodeCard {...{ id, name, episode, air_date }} />
                </Link>
              </div>
            ))}
          </>
        ) : (
          <>
            {INITIAL_STATE.map(elem => (
              <div key={elem} className={styles['grid-item']}>
                <EpisodeCardSkeleton />
              </div>
            ))}
          </>
        )}
      </div>
    </main>
  );
};

export default SeasonPage;
