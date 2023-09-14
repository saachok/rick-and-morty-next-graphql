import styles from '../../public/styles/episodes/EpisodeCard.module.scss';

const EpisodeCard = ({ id, name, episode, air_date }) => {
  // console.log(episode.slice(3));
  return (
    <div className={styles.container}>
      <h1 className={styles.name}>{name}</h1>
      <p className={styles['air-date']}>{air_date}</p>
    </div>
  );
};

export default EpisodeCard;
