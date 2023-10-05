import Link from 'next/link';
import styles from '../../public/styles/episodes/EpisodeCard.module.scss';

const EpisodeCard = ({ name, air_date, href }) => {
  return (
    <Link href={href} className={styles.link}>
      <div className={styles.container}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles['air-date']}>{air_date}</p>
      </div>
    </Link>
  );
};

export default EpisodeCard;
