import CharacterCardSkeleton from '@/components/UI/skeletons/CharacterCardSkeleton';

import styles from '@/public/styles/UI/skeletons/LocationInfoSkeleton.module.scss';

const INITIAL_STATE = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

const LocationInfoSkeleton = () => {
  return (
    <main className={styles.container}>
      <div className={styles.info}>
        <h3 className={`${styles.name} ${styles.pulse}`}></h3>
        <div className={styles['first-row']}>
          <h3 className={styles.pulse}></h3>
          <h3 className={styles.pulse}></h3>
        </div>
        <div className={styles['second-row']}>
          <h3 className={styles.pulse}></h3>
          <h3 className={styles.pulse}></h3>
        </div>
        <div className={styles['third-row']}>
          <h3 className={styles.pulse}></h3>
          <h3 className={styles.pulse}></h3>
        </div>
      </div>
      <div className={styles.grid}>
        {INITIAL_STATE.map(({ id }) => (
          <CharacterCardSkeleton key={id} />
        ))}
      </div>
    </main>
  );
};

export default LocationInfoSkeleton;
