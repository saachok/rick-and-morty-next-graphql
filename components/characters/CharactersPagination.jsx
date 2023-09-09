import styles from '../../public/styles/characters/CharactersPagination.module.scss';

import PaginationButton from '../UI/PaginationButton';
import StaticPagination from './pagination/StaticPagination';
import DynamicPagination from './pagination/DynamicPagination';

<<<<<<< HEAD
const CharactersPagination = ({ pageNumber, setPageNumber }) => {
=======
const CharactersPagination = ({ pageNumber, goToPage }) => {
>>>>>>> feat/characters-pagination
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <PaginationButton
          disabled={pageNumber > 1 ? false : true}
<<<<<<< HEAD
          onClick={() => setPageNumber(prevState => prevState - 1)}
=======
          onClick={() => goToPage(pageNumber - 1)}
>>>>>>> feat/characters-pagination
        >
          &#60;
        </PaginationButton>
        {pageNumber < 6 ? (
<<<<<<< HEAD
          <StaticPagination {...{ pageNumber, setPageNumber }} />
        ) : pageNumber < 38 ? (
          <DynamicPagination {...{ pageNumber, setPageNumber }} />
        ) : (
          <StaticPagination {...{ pageNumber, setPageNumber }} />
        )}
        <PaginationButton
          disabled={pageNumber >= 42 ? true : false}
          onClick={() => setPageNumber(prevState => prevState + 1)}
=======
          <StaticPagination {...{ pageNumber, goToPage }} />
        ) : pageNumber < 38 ? (
          <DynamicPagination {...{ pageNumber, goToPage }} />
        ) : (
          <StaticPagination {...{ pageNumber, goToPage }} />
        )}
        <PaginationButton
          disabled={pageNumber >= 42 ? true : false}
          onClick={() => goToPage(pageNumber + 1)}
>>>>>>> feat/characters-pagination
        >
          &#62;
        </PaginationButton>
      </div>
    </div>
  );
};

export default CharactersPagination;
