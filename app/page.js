import Link from 'next/link';
import styles from '../public/styles/Home.module.scss';

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles['text-content']}>
        <h1 className={styles.title}>Rick and Morty</h1>
        <h2 className={styles.subtitle}>
          This App was created using Next.js and GraphQL
        </h2>
        <p className={styles.description}>
          Let&apos;s read some info about Rick and Morty Universe
        </p>
      </div>
      <div className={styles.links}>
        <Link className={styles.characters} href={'/characters'}>
          Characters
        </Link>
        <Link className={styles.episodes} href={'/episodes'}>
          Episodes
        </Link>
        <Link className={styles.locations} href={'/locations'}>
          Locations
        </Link>
      </div>
    </main>
  );
}
