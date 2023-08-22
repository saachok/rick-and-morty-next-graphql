import SeasonCard from '@/components/episodes/SeasonCard';

import styles from '../../public/styles/episodes/EpisodesPage.module.scss';

export default function Episodes() {
  const seasons = [];
  let i = 1;

  while (i <= 6) {
    seasons.push({
      seasonIndex: i,
      airDate: 'Release date',
      episodes: 16,
    });
    i++;
  }

  return (
    <main className={styles.container}>
      {seasons ? (
        seasons.map(({ seasonIndex, airDate, episodes }) => (
          <SeasonCard
            key={seasonIndex}
            {...{ seasonIndex, airDate, episodes }}
          />
        ))
      ) : (
        <h1>That&apos;s Episodes page!</h1>
      )}
    </main>
  );
}
