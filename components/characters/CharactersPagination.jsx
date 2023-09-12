import styles from '../../public/styles/characters/CharactersPagination.module.scss';

import PaginationButton from '../UI/PaginationButton';
import StaticPagination from './pagination/StaticPagination';
import DynamicPagination from './pagination/DynamicPagination';
import SmallScreenPagination from './pagination/SmallScreenPagination';

const CharactersPagination = ({ pagesTotal, pageNumber, goToPage }) => {
  return (
    <>
      <SmallScreenPagination {...{ pagesTotal, pageNumber, goToPage }} />
      <div className={styles.container}>
        <div className={styles.nav}>
          <PaginationButton
            disabled={pageNumber > 1 ? false : true}
            onClick={() => goToPage(pageNumber - 1)}
          >
            &#60;
          </PaginationButton>
          {pageNumber < 6 ? (
            <StaticPagination {...{ pagesTotal, pageNumber, goToPage }} />
          ) : pageNumber < pagesTotal - 4 ? (
            <DynamicPagination {...{ pagesTotal, pageNumber, goToPage }} />
          ) : (
            <StaticPagination {...{ pagesTotal, pageNumber, goToPage }} />
          )}
          <PaginationButton
            disabled={pageNumber >= pagesTotal ? true : false}
            onClick={() => goToPage(pageNumber + 1)}
          >
            &#62;
          </PaginationButton>
        </div>
      </div>
    </>
  );
};

export default CharactersPagination;
