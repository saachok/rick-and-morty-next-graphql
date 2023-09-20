import styles from '@/public/styles/UI/skeletons/CharacterCardSkeleton.module.scss';

const CharacterCardSkeleton = () => {
  return (
    <div className={styles.card}>
      <div className={`${styles.img} ${styles.pulse}`}></div>
      <div className={styles['text-info']}>
        <div className={`${styles.name} ${styles.pulse}`}></div>
        <div className={`${styles.species} ${styles.pulse}`}></div>
      </div>
    </div>
  );
};

export default CharacterCardSkeleton;
