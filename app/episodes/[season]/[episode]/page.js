'use client';

import { useFetchData } from '@/hooks/useFetchData';

import getEpisodeDetails from '@/graphql/queries/episodes/getEpisodeDetails';
import { client } from '@/graphql/graphql-client';

import CharacterCard from '@/components/characters/CharacterCard';

import styles from '@/public/styles/episodes/EpisodeDetailsPage.module.scss';
import CharacterCardSkeleton from '@/components/UI/skeletons/CharacterCardSkeleton';
import EpisodeInfoSkeleton from '@/components/UI/skeletons/EpisodeInfoSkeleton';

const INITIAL_STATE = [1, 2, 3, 4, 5];

const EpisodePage = props => {
  const { isLoading, data: episodeInfo } = useFetchData(getEpisodeInfo);
  const { season, episode } = props.params;

  async function getEpisodeInfo() {
    const { episodes } = await client.request(getEpisodeDetails, {
      filter: { episode: `${season}${episode}` },
    });
    return episodes.results[0];
  }

  return (
    <main className={styles.container}>
      <div className={styles['info-holder']}>
        {!isLoading ? (
          <>
            <div className={styles.info}>
              <h1 className={styles.title}>{episodeInfo.name}</h1>
              <div className={styles.details}>
                <p className={styles.detail}>Season: {season.slice(1)}</p>
                <p className={styles.detail}>
                  Episode in the row: {episodeInfo.id}
                </p>
                <p className={styles.detail}>Episode: {episode.slice(1)}</p>
                <p className={styles.detail}>
                  Release date: {episodeInfo.air_date}
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <EpisodeInfoSkeleton />
          </>
        )}
      </div>
      <div className={styles['grid-holder']}>
        <div className={styles.grid}>
          {!isLoading ? (
            <>
              {episodeInfo.characters.map(character => (
                <CharacterCard key={character.id} {...character} />
              ))}
            </>
          ) : (
            <>
              {INITIAL_STATE.map(elem => (
                <CharacterCardSkeleton key={elem} />
              ))}
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default EpisodePage;
