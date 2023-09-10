import Image from 'next/image';
import styles from '../../public/styles/characters/CharacterCard.module.scss';

const CharacterCard = ({ name, image, species }) => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src={image}
        alt={`Image of ${name}`}
        width={250}
        height={250}
      />
      <div className={styles['text-info']}>
        <h1 className={styles.name}>{name}</h1>
        <h2 className={styles.species}>{species}</h2>
      </div>
    </div>
  );
};

export default CharacterCard;
