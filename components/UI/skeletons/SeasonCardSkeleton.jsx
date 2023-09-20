import styles from '@/public/styles/UI/skeletons/SeasonCardSkeleton.module.scss';

const SeasonCardSkeleton = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.season} ${styles.pulse}`}></div>
    </div>
  );
};

export default SeasonCardSkeleton;
