import PaginationButton from '@/components/UI/PaginationButton';

const StaticPagination = ({ pageNumber, setPageNumber }) => {
  const FirstPages = () => {
    const firstButtons = [];
    for (let i = 1; i <= 7; i++) {
      firstButtons.push(
        <PaginationButton
          key={i}
          onClick={() => setPageNumber(i)}
          isActive={pageNumber === i ? true : false}
        >
          {i}
        </PaginationButton>
      );
    }
    return (
      <>
        {firstButtons.map(btn => btn)}
        <PaginationButton onClick={() => setPageNumber(8)}>
          ...
        </PaginationButton>
        <PaginationButton onClick={() => setPageNumber(42)}>
          42
        </PaginationButton>
      </>
    );
  };

  const LastPages = () => {
    const lastButtons = [];
    for (let i = 36; i <= 42; i++) {
      lastButtons.push(
        <PaginationButton
          key={i}
          onClick={() => setPageNumber(i)}
          isActive={pageNumber === i ? true : false}
        >
          {i}
        </PaginationButton>
      );
    }
    return (
      <>
        <PaginationButton onClick={() => setPageNumber(1)}>1</PaginationButton>
        <PaginationButton onClick={() => setPageNumber(35)}>
          ...
        </PaginationButton>
        {lastButtons.map(btn => btn)}
      </>
    );
  };

  return pageNumber < 6 ? <FirstPages /> : <LastPages />;
};

export default StaticPagination;
