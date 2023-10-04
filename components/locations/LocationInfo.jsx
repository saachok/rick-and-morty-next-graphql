import styles from '@/public/styles/locations/LocationInfo.module.scss';
import CharacterCard from '../characters/CharacterCard';
import Link from 'next/link';

const LocationInfo = ({
  name,
  dimesion,
  created,
  type,
  residents: characters,
}) => {
  const data = new Date(created).toDateString();
  console.log(characters);
  return (
    <main className={styles.container}>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.desc}>
          <h3>Dimesion</h3>
          <h3>{dimesion ?? 'Unknown'}</h3>
        </div>
        <div className={styles.desc}>
          <h3>Type</h3>
          <h3>{type ?? 'Unknown'}</h3>
        </div>
        <div className={styles.desc}>
          <h3>Created</h3>
          <h3>{data}</h3>
        </div>
      </div>
      <div className={styles.grid}>
        {characters.map(({ id, ...rest }) => (
          <Link key={id} href={`/character/${id}`} className={styles.link}>
            <CharacterCard {...rest} />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default LocationInfo;
