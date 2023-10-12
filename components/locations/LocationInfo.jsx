import styles from '@/public/styles/locations/LocationInfo.module.scss';
import CharacterList from './CharactersList';

const LocationInfo = ({
  name,
  dimesion,
  created,
  type,
  residents: characters,
}) => {
  const data = new Date(created).toDateString();
  return (
    <main className={styles.container}>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.desc}>
          <p>Dimesion</p>
          <p>{dimesion ?? 'Unknown'}</p>
        </div>
        <div className={styles.desc}>
          <p>Type</p>
          <p>{type ?? 'Unknown'}</p>
        </div>
        <div className={styles.desc}>
          <p>Created</p>
          <p>{data}</p>
        </div>
      </div>
      <CharacterList characters={characters} />
    </main>
  );
};

export default LocationInfo;
