import styles from '../../public/styles/episodes/SeasonCard.module.scss';

const SeasonCard = ({ key, seasonIndex, airDate, episodes }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.season}>Season {seasonIndex}</h2>
    </div>
  );
};

export default SeasonCard;
