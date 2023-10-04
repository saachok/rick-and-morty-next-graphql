import PaginationButton from '@/components/UI/pagination/PaginationButton';

const DynamicPagination = ({ pagesTotal, pageNumber, goToPage }) => {
  return (
    <>
      <PaginationButton onClick={() => goToPage(1)}>1</PaginationButton>
      <PaginationButton onClick={() => goToPage(pageNumber - 3)}>
        ...
      </PaginationButton>
      <PaginationButton onClick={() => goToPage(pageNumber - 2)}>
        {pageNumber - 2}
      </PaginationButton>
      <PaginationButton onClick={() => goToPage(pageNumber - 1)}>
        {pageNumber - 1}
      </PaginationButton>
      <PaginationButton isActive={true}>{pageNumber}</PaginationButton>
      <PaginationButton onClick={() => goToPage(pageNumber + 1)}>
        {pageNumber + 1}
      </PaginationButton>
      <PaginationButton onClick={() => goToPage(pageNumber + 2)}>
        {pageNumber + 2}
      </PaginationButton>
      <PaginationButton onClick={() => goToPage(pageNumber + 3)}>
        ...
      </PaginationButton>
      <PaginationButton onClick={() => goToPage(pagesTotal)}>
        {pagesTotal}
      </PaginationButton>
    </>
  );
};

export default DynamicPagination;
