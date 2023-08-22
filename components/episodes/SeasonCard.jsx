import styles from '../../public/styles/episodes/SeasonCard.module.scss';

const SeasonCard = ({ key, seasonIndex, airDate, episodes }) => {
  return (
    <div key={key} className={styles.container}>
      <h2>Season {seasonIndex}</h2>
      <p>Realese date: {airDate}</p>
      <p>Episodes: {episodes}</p>
    </div>
  );
};

export default SeasonCard;
