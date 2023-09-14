'use client';

import { useState, useEffect, useCallback } from 'react';

import getSeasonEpisodesQuery from '../../../graphql/queries/episodes/getSeasonEpisodes';
import { client } from '../../../graphql/graphql-client';
import EpisodeCard from '@/components/episodes/EpisodeCard';
import Loading from '@/components/UI/Loading';
import Link from 'next/link';

import { getEpisodePath } from '@/functions/navigation';

import styles from '../../../public/styles/episodes/SeasonPage.module.scss';

const SeasonPage = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [episodes, setEpisodes] = useState();
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
      {episodes && !isLoading ? (
        <div className={styles.grid}>
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
        </div>
      ) : (
        <Loading />
      )}
    </main>
  );
};

export default SeasonPage;
