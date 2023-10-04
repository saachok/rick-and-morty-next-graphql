import styles from '@/public/styles/UI/pagination/PaginationMenu.module.scss';

import PaginationButton from './PaginationButton';
import StaticPagination from './StaticPagination';
import DynamicPagination from './DynamicPagination';
import SmallScreenPagination from './SmallScreenPagination';
import ShortPagination from './ShortPagination';

const PaginationMenu = ({ pagesTotal, pageNumber, goToPage }) => {
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
          {pagesTotal <= 7 ? (
            <ShortPagination {...{ pagesTotal, pageNumber, goToPage }} />
          ) : pageNumber < 6 ? (
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

export default PaginationMenu;
