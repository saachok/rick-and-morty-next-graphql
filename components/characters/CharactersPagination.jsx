import styles from '../../public/styles/characters/CharactersPagination.module.scss';

import PaginationButton from '../UI/PaginationButton';
import StaticPagination from './pagination/StaticPagination';
import DynamicPagination from './pagination/DynamicPagination';

const CharactersPagination = ({ pageNumber, setPageNumber }) => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <PaginationButton
          disabled={pageNumber > 1 ? false : true}
          onClick={() => setPageNumber(prevState => prevState - 1)}
        >
          &#60;
        </PaginationButton>
        {pageNumber < 6 ? (
          <StaticPagination {...{ pageNumber, setPageNumber }} />
        ) : pageNumber < 38 ? (
          <DynamicPagination {...{ pageNumber, setPageNumber }} />
        ) : (
          <StaticPagination {...{ pageNumber, setPageNumber }} />
        )}
        <PaginationButton
          disabled={pageNumber >= 42 ? true : false}
          onClick={() => setPageNumber(prevState => prevState + 1)}
        >
          &#62;
        </PaginationButton>
      </div>
    </div>
  );
};

export default CharactersPagination;
