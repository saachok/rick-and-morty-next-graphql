import styles from '../../public/styles/episodes/SeasonCard.module.scss';

const SeasonCard = ({ seasonIndex }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.season}>Season {seasonIndex}</h2>
    </div>
  );
};

export default SeasonCard;
