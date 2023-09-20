import React from 'react';

import styles from '@/public/styles/UI/skeletons/EpisodeInfoSkeleton.module.scss';

const EpisodeInfoSkeleton = () => {
  return (
    <div className={styles['info-holder']}>
      <div className={styles.info}>
        <h1 className={`${styles.title} ${styles.pulse}`}></h1>
        <div className={styles.details}>
          <div className={styles['grid-item']}>
            <p className={`${styles['detail-short']} ${styles.pulse}`}></p>
          </div>
          <div className={styles['grid-item']}>
            <p className={`${styles['detail-long']} ${styles.pulse}`}></p>
          </div>
          <div className={styles['grid-item']}>
            <p className={`${styles['detail-short']} ${styles.pulse}`}></p>
          </div>
          <div className={styles['grid-item']}>
            <p className={`${styles['detail-long']} ${styles.pulse}`}></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodeInfoSkeleton;
