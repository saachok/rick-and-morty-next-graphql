import Image from 'next/image';
import styles from '../../public/styles/characters/CharacterInfo.module.scss';

const CharacterInfo = ({
  id,
  image,
  name,
  gender,
  species,
  status,
  type,
  created,
}) => {
  const date = new Date(created);
  return (
    <div className={styles.container}>
      <Image
        src={image}
        alt={name}
        height={500}
        width={500}
        className={styles.photo}
      />
      <div className={styles.info}>
        <div className={styles.key}>
          <p className={styles.name}>Name</p>
          <p className={styles.species}>Species</p>
          <p>Gender</p>
          <p>Created</p>
          <p>Status</p>
        </div>
        <div className={styles.value}>
          <p className={styles.name}>{name}</p>
          <p className={styles.species}>{species}</p>
          <p>{gender}</p>
          <p>{date.toLocaleDateString()}</p>
          <p>{status}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterInfo;
