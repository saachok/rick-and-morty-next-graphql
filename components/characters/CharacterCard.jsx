import Image from 'next/image';
import styles from '../../public/styles/characters/CharacterCard.module.scss';

const CharacterCard = ({ key, name, image, species }) => {
  return (
    <div key={key} className={styles.container}>
      <Image src={image} alt={`Image of ${name}`} width={300} height={300} />
      <h1>{name}</h1>
      <h2>{species}</h2>
    </div>
  );
};

export default CharacterCard;
