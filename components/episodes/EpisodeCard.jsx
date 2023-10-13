import Link from 'next/link';
import styles from '../../public/styles/episodes/EpisodeCard.module.scss';

const EpisodeCard = ({ name, air_date, href }) => {
  return (
    <Link href={href} className={styles.link}>
      <div className={styles.container}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles['air-date']}>{air_date}</p>
      </div>
    </Link>
  );
};

export default EpisodeCard;
