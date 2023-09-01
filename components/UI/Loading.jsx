import styles from '../../public/styles/UI/Loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span class={styles.spinner}></span>
        <h1 className={styles.text}>Loading...</h1>
      </div>
    </div>
  );
};

export default Loading;
