import PaginationButton from '@/components/UI/pagination/PaginationButton';

const StaticPagination = ({ pagesTotal, pageNumber, goToPage }) => {
  const FirstPages = () => {
    const firstButtons = [];
    for (let i = 1; i <= 7; i++) {
      firstButtons.push(
        <PaginationButton
          key={i}
          onClick={() => goToPage(i)}
          isActive={pageNumber === i ? true : false}
        >
          {i}
        </PaginationButton>
      );
    }
    return (
      <>
        {firstButtons.map(btn => btn)}
        <PaginationButton onClick={() => goToPage(8)}>...</PaginationButton>
        <PaginationButton onClick={() => goToPage(pagesTotal)}>
          {pagesTotal}
        </PaginationButton>
      </>
    );
  };

  const LastPages = () => {
    const lastButtons = [];
    for (let i = pagesTotal - 6; i <= pagesTotal; i++) {
      lastButtons.push(
        <PaginationButton
          key={i}
          onClick={() => goToPage(i)}
          isActive={pageNumber === i ? true : false}
        >
          {i}
        </PaginationButton>
      );
    }
    return (
      <>
        <PaginationButton onClick={() => goToPage(1)}>1</PaginationButton>
        <PaginationButton onClick={() => goToPage(pagesTotal - 7)}>
          ...
        </PaginationButton>
        {lastButtons.map(btn => btn)}
      </>
    );
  };

  return pageNumber < 6 ? <FirstPages /> : <LastPages />;
};

export default StaticPagination;
