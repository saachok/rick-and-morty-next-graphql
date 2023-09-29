import Image from 'next/image';
import styles from '@/public/styles/characters/CharacterInfo.module.scss';
import { getCapitalizedString } from '@/functions/dataFormatting';

const CharacterInfo = ({ image, name, gender, species, status, created }) => {
  const windowWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const setImageSize = windowWidth => {
    if (windowWidth >= 1200) return 500;
    return 300;
  };

  const date = new Date(created).toDateString();
  return (
    <div className={styles.container}>
      <Image
        src={image}
        alt={name}
        height={setImageSize(windowWidth)}
        width={setImageSize(windowWidth)}
        className={styles.photo}
      />
      <div className={styles['character-description']}>
        <div>
          <h2>Name</h2>
          <h3>{name}</h3>
        </div>
        <div>
          <h2>Species</h2>
          <h3>{species}</h3>
        </div>
        <div>
          <h2>Gender</h2>
          <h3>{gender && getCapitalizedString(gender)}</h3>
        </div>
        <div>
          <h2>Created</h2>
          <h3>{date}</h3>
        </div>
        <div>
          <h2>Status</h2>
          <h3>{status && getCapitalizedString(status)}</h3>
        </div>
      </div>
    </div>
  );
};

export default CharacterInfo;
