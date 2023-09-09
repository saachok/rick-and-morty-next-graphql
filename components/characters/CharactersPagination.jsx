import styles from '../../public/styles/characters/CharactersPagination.module.scss';

import PaginationButton from '../UI/PaginationButton';
import StaticPagination from './pagination/StaticPagination';
import DynamicPagination from './pagination/DynamicPagination';

const CharactersPagination = ({ pageNumber, goToPage }) => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <PaginationButton
          disabled={pageNumber > 1 ? false : true}
          onClick={() => goToPage(pageNumber - 1)}
        >
          &#60;
        </PaginationButton>
        {pageNumber < 6 ? (
          <StaticPagination {...{ pageNumber, goToPage }} />
        ) : pageNumber < 38 ? (
          <DynamicPagination {...{ pageNumber, goToPage }} />
        ) : (
          <StaticPagination {...{ pageNumber, goToPage }} />
        )}
        <PaginationButton
          disabled={pageNumber >= 42 ? true : false}
          onClick={() => goToPage(pageNumber + 1)}
        >
          &#62;
        </PaginationButton>
      </div>
    </div>
  );
};

export default CharactersPagination;
