'use client';

import { useState, useEffect, useCallback } from 'react';

import getSeasonEpisodesQuery from '../../../graphql/queries/episodes/getSeasonEpisodes';
import { client } from '../../../graphql/graphql-client';
import EpisodeCard from '@/components/episodes/EpisodeCard';

import { getEpisodePath } from '@/functions/navigation';
import { INITIAL_EPISODES } from '@/constants';

import styles from '../../../public/styles/episodes/SeasonPage.module.scss';
import EpisodeCardSkeleton from '@/components/UI/skeletons/EpisodeCardSkeleton';
import SeasonTrailer from '@/components/episodes/SeasonTrailer';
import SeasonTrailerSkeleton from '@/components/UI/skeletons/SeasonTrailerSkeleton';

const SeasonPage = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [episodes, setEpisodes] = useState([]);
  const { season } = props.params;

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
      {!isLoading ? (
        <SeasonTrailer season={season} />
      ) : (
        <SeasonTrailerSkeleton />
      )}
      <div className={styles.grid}>
        {!isLoading ? (
          <>
            {episodes.map(({ id, name, episode, air_date }) => (
              <EpisodeCard
                key={id}
                href={getEpisodePath(season, episode)}
                {...{ id, name, episode, air_date }}
              />
            ))}
          </>
        ) : (
          <>
            {INITIAL_EPISODES.map(id => (
              <div key={id} className={styles['grid-item']}>
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
