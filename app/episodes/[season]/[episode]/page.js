'use client';

import { useState, useEffect, useCallback } from 'react';
import { useFetchData } from '@/hooks/useFetchData';

import getEpisodeDetails from '@/graphql/queries/episodes/getEpisodeDetails';
import { client } from '@/graphql/graphql-client';

import Link from 'next/link';
import CharacterCard from '@/components/characters/CharacterCard';

import styles from '@/public/styles/episodes/EpisodeDetailsPage.module.scss';
import CharacterCardSkeleton from '@/components/UI/skeletons/CharacterCardSkeleton';

const EpisodePage = props => {
  // FIXME: add initial state
  const { isLoading, data: episodeInfo } = useFetchData(getEpisodeInfo);
  const { season, episode } = props.params;

  const renderSkeletons = () => {
    const components = [];
    for (let i = 0; i < 5; i++) {
      components.push(<CharacterCardSkeleton key={i} />);
    }
    return components;
  };

  async function getEpisodeInfo() {
    const { episodes } = await client.request(getEpisodeDetails, {
      filter: { episode: `${season}${episode}` },
    });
    return episodes.results[0];
  }

  return (
    <main
      className={episodeInfo ? styles.container : styles['container-loading']}
    >
      {episodeInfo && !isLoading ? (
        <>
          <div className={styles['info-holder']}>
            <div className={styles.info}>
              <h1 className={styles.title}>{episodeInfo.name}</h1>
              <div className={styles.details}>
                <p className={styles.detail}>Season: {season.slice(1)}</p>
                <p className={styles.detail}>
                  Episode number in the row: {episodeInfo.id}
                </p>
                <p className={styles.detail}>Episode: {episode.slice(1)}</p>
                <p className={styles.detail}>
                  Release date: {episodeInfo.air_date}
                </p>
              </div>
            </div>
          </div>
          <div className={styles['grid-holder']}>
            <h1>Characters in the episode:</h1>
            <div className={styles.grid}>
              {episodeInfo.characters.map(({ id, name, image, species }) => (
                <div key={id} className={styles['grid-item']}>
                  <Link className={styles.link} href={`/character/${id}`}>
                    <CharacterCard {...{ name, image, species }} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className={styles['grid-holder']}>
          <div className={styles.grid}>{renderSkeletons()}</div>
        </div>
      )}
    </main>
  );
};

export default EpisodePage;
