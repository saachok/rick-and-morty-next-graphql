import PaginationButton from '@/components/UI/pagination/PaginationButton';

const ShortPagination = ({ pagesTotal, pageNumber, goToPage }) => {
  return (
    <>
      {Array.from({ length: pagesTotal }).map((_, index) => (
        <PaginationButton
          key={index}
          onClick={() => goToPage(index + 1)}
          isActive={index + 1 === pageNumber ? true : false}
        >
          {index + 1}
        </PaginationButton>
      ))}
    </>
  );
};

export default ShortPagination;
