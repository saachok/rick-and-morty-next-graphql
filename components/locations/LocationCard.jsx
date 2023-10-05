import Link from 'next/link';

import styles from '@/public/styles/locations/LocationCard.module.scss';

const LocationCard = ({ name, type, dimension, created, href }) => {
  const date = new Date(created).toDateString();
  return (
    <Link href={href} className={styles.link}>
      <div className={styles.container}>
        <h1 className={styles.name}>{name}</h1>
        <h2 className={styles.dimension}>{dimension}</h2>
        <h2 className={styles.type}>{type}</h2>
        <h2 className={styles.created}>{date}</h2>
      </div>
    </Link>
  );
};

export default LocationCard;
