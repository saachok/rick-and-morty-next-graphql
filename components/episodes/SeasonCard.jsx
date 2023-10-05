import Link from 'next/link';
import styles from '../../public/styles/episodes/SeasonCard.module.scss';

const SeasonCard = ({ seasonIndex }) => {
  return (
    <Link className={styles.link} href={`/episodes/s0${seasonIndex}`}>
      <div className={styles.container}>
        <h2 className={styles.season}>Season {seasonIndex}</h2>
      </div>
    </Link>
  );
};

export default SeasonCard;
