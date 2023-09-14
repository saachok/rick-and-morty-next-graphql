import SeasonCard from '@/components/episodes/SeasonCard';
import Link from 'next/link';

import styles from '../../public/styles/episodes/EpisodesPage.module.scss';

export default function Episodes() {
  const seasons = [];
  let i = 1;

  while (i <= 6) {
    seasons.push({
      seasonIndex: i,
      // FIXME: airDate and episodes variables weren't used in the rest part of the code
      airDate: 'Release date',
      episodes: 16,
    });
    i++;
  }

  return (
    <main className={styles.container}>
      <div className={styles.grid}>
        {seasons.map(({ seasonIndex, airDate, episodes }) => (
          <div className={styles['grid-item']} key={seasonIndex}>
            <Link
              key={seasonIndex}
              href={`/episodes/s0${seasonIndex}`}
              className={styles.link}
            >
              <SeasonCard {...{ seasonIndex, airDate, episodes }} />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
