import React from 'react';

import styles from '@/public/styles/UI/skeletons/CharacterInfoSkeleton.module.scss';

const CharacterInfoSkeleton = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.photo} ${styles.pulse}`} />
      <div className={styles['character-description']}>
        <div>
          <h2>
            <span className={styles.pulse}></span>
          </h2>
          <h2>
            <span className={styles.pulse}></span>
          </h2>
        </div>
        <div>
          <h2>
            <span className={styles.pulse}></span>
          </h2>
          <h2>
            <span className={styles.pulse}></span>
          </h2>
        </div>
        <div>
          <h2>
            <span className={styles.pulse}></span>
          </h2>
          <h2>
            <span className={styles.pulse}></span>
          </h2>
        </div>
        <div>
          <h2>
            <span className={styles.pulse}></span>
          </h2>
          <h2>
            <span className={styles.pulse}></span>
          </h2>
        </div>
        <div>
          <h2>
            <span className={styles.pulse}></span>
          </h2>
          <h2>
            <span className={styles.pulse}></span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CharacterInfoSkeleton;
