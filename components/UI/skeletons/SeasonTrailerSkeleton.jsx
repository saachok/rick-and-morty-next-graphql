import styles from '@/public/styles/UI/skeletons/SeasonTrailerSkeleton.module.scss';

const SeasonTrailerSkeleton = () => {
  return (
    <div className={styles.trailer}>
      <h2 className={styles.pulse}></h2>
      <span></span>
    </div>
  );
};

export default SeasonTrailerSkeleton;
