import styles from '@/public/styles/UI/skeletons/CharacterCardSkeleton.module.scss';

const CharacterCardSkeleton = () => {
  return (
    <div className={styles['skeleton-card']}>
      <div className={`${styles['skeleton-img']} ${styles.pulse}`}></div>
      <div className={styles['skeleton-text-info']}>
        <div className={`${styles['skeleton-name']} ${styles.pulse}`}></div>
        <div className={`${styles['skeleton-species']} ${styles.pulse}`}></div>
      </div>
    </div>
  );
};

export default CharacterCardSkeleton;
