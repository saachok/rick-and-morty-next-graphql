'use client';

import { useState, useEffect } from 'react';

import { client } from '../../graphql/graphql-client';
import getSeasonsAmount from '@/graphql/queries/episodes/getSeasonsAmount';

import SeasonCard from '@/components/episodes/SeasonCard';
import Link from 'next/link';

import styles from '../../public/styles/episodes/EpisodesPage.module.scss';
import Loading from '@/components/UI/Loading';

export default function Episodes() {
  const [isLoading, setIsLoading] = useState(false);
  const [seasons, setSeasons] = useState([]);

  const fetchSeasons = async () => {
    const data = await client.request(getSeasonsAmount);
    return data.episodes.results;
  };

  useEffect(() => {
    setIsLoading(true);

    fetchSeasons()
      .then(data => {
        setSeasons(data);
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);

  return (
    <main className={styles.container}>
      {seasons.length && !isLoading ? (
        <div className={styles.grid}>
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
        </div>
      ) : (
        <Loading />
      )}
    </main>
  );
}
