import PaginationButton from '@/components/UI/PaginationButton';

const DynamicPagination = ({ pageNumber, setPageNumber }) => {
  return (
    <>
      <PaginationButton onClick={() => setPageNumber(1)}>1</PaginationButton>
      <PaginationButton
        onClick={() => setPageNumber(prevState => prevState - 3)}
      >
        ...
      </PaginationButton>
      <PaginationButton
        onClick={() => setPageNumber(prevState => prevState - 2)}
      >
        {pageNumber - 2}
      </PaginationButton>
      <PaginationButton
        onClick={() => setPageNumber(prevState => prevState - 1)}
      >
        {pageNumber - 1}
      </PaginationButton>
      <PaginationButton isActive={true}>{pageNumber}</PaginationButton>
      <PaginationButton
        onClick={() => setPageNumber(prevState => prevState + 1)}
      >
        {pageNumber + 1}
      </PaginationButton>
      <PaginationButton
        onClick={() => setPageNumber(prevState => prevState + 2)}
      >
        {pageNumber + 2}
      </PaginationButton>
      <PaginationButton
        onClick={() => setPageNumber(prevState => prevState + 3)}
      >
        ...
      </PaginationButton>
      <PaginationButton onClick={() => setPageNumber(42)}>42</PaginationButton>
    </>
  );
};

export default DynamicPagination;
