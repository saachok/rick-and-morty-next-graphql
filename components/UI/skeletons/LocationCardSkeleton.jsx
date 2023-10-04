import styles from '@/public/styles/UI/skeletons/LocationCardSkeleton.module.scss';

const LocationCardSkeleton = () => {
  return (
    <div className={styles.container}>
      <h2 className={`${styles.name} ${styles.pulse}`}></h2>
      <h2 className={`${styles.dimension} ${styles.pulse}`}></h2>
      <h1 className={`${styles.type} ${styles.pulse}`}></h1>
      <h2 className={`${styles.created} ${styles.pulse}`}></h2>
    </div>
  );
};

export default LocationCardSkeleton;
