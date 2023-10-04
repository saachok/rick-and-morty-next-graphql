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
      <CharacterList characters={characters} />
    </main>
  );
};

export default LocationInfo;
