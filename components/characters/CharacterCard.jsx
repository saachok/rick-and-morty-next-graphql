import Image from 'next/image';
import Link from 'next/link';
import styles from '../../public/styles/characters/CharacterCard.module.scss';

const CharacterCard = ({ id, name, image, species }) => {
  return (
    <Link className={styles.link} href={`/character/${id}`}>
      <div className={styles.container}>
        <Image
          className={styles.image}
          src={image}
          alt={`Photo of ${name}`}
          width={250}
          height={250}
        />
        <div className={styles['text-info']}>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.species}>{species}</p>
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard;
