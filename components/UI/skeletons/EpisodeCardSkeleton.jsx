import styles from '@/public/styles/UI/skeletons/EpisodeCardSkeleton.module.scss';

const EpisodeCardSkeleton = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.name} ${styles.pulse}`}></div>
      <div className={`${styles['air-date']} ${styles.pulse}`}></div>
    </div>
  );
};

export default EpisodeCardSkeleton;
