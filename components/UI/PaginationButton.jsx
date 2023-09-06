import styles from '../../public/styles/UI/PaginationButton.module.scss';

const PaginationButton = props => {
  return (
    <button
      className={`${styles.btn} ${props.isActive ? styles.active : ''}`}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default PaginationButton;
