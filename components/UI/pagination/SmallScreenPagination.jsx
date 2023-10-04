import PaginationButton from './PaginationButton';
import styles from '@/public/styles/UI/pagination/SmallScreenPagination.module.scss';

const SmallScreenPagination = ({ pagesTotal, pageNumber, goToPage }) => {
  return (
    <div className={styles.container}>
      <PaginationButton
        disabled={pageNumber > 1 ? false : true}
        onClick={() => goToPage(1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          id="first-page"
        >
          <path fill="none" d="M24 0v24H0V0h24z" opacity=".87"></path>
          <path
            fill={`${
              pageNumber > 1 ? 'rgb(13, 13, 13)' : 'rgba(13, 13, 13, 0.15)'
            }`}
            d="M17.7 15.89L13.82 12l3.89-3.89c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0l-4.59 4.59c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.38.38-1.02-.01-1.4zM7 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1z"
          ></path>
        </svg>
      </PaginationButton>
      <PaginationButton
        disabled={pageNumber > 1 ? false : true}
        onClick={() => goToPage(pageNumber - 1)}
      >
        &#60;
      </PaginationButton>
      <p className={styles['text-info']}>
        Page {pageNumber} of {pagesTotal}
      </p>
      <PaginationButton
        disabled={pageNumber >= pagesTotal ? true : false}
        onClick={() => goToPage(pageNumber + 1)}
      >
        &#62;
      </PaginationButton>
      <PaginationButton
        disabled={pageNumber >= pagesTotal ? true : false}
        onClick={() => goToPage(pagesTotal)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          id="last-page"
        >
          <path fill="none" d="M0 0h24v24H0V0z" opacity=".87"></path>
          <path
            fill={`${
              pageNumber < pagesTotal
                ? 'rgb(13, 13, 13)'
                : 'rgba(13, 13, 13, 0.15)'
            }`}
            d="M6.29 8.11L10.18 12l-3.89 3.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L7.7 6.7c-.39-.39-1.02-.39-1.41 0-.38.39-.38 1.03 0 1.41zM17 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1z"
          ></path>
        </svg>
      </PaginationButton>
    </div>
  );
};

export default SmallScreenPagination;
