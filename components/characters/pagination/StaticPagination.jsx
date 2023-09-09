import PaginationButton from '@/components/UI/PaginationButton';

<<<<<<< HEAD
const StaticPagination = ({ pageNumber, setPageNumber }) => {
=======
const StaticPagination = ({ pageNumber, goToPage }) => {
>>>>>>> feat/characters-pagination
  const FirstPages = () => {
    const firstButtons = [];
    for (let i = 1; i <= 7; i++) {
      firstButtons.push(
        <PaginationButton
          key={i}
<<<<<<< HEAD
          onClick={() => setPageNumber(i)}
=======
          onClick={() => goToPage(i)}
>>>>>>> feat/characters-pagination
          isActive={pageNumber === i ? true : false}
        >
          {i}
        </PaginationButton>
      );
    }
    return (
      <>
        {firstButtons.map(btn => btn)}
<<<<<<< HEAD
        <PaginationButton onClick={() => setPageNumber(8)}>
          ...
        </PaginationButton>
        <PaginationButton onClick={() => setPageNumber(42)}>
          42
        </PaginationButton>
=======
        <PaginationButton onClick={() => goToPage(8)}>...</PaginationButton>
        <PaginationButton onClick={() => goToPage(42)}>42</PaginationButton>
>>>>>>> feat/characters-pagination
      </>
    );
  };

  const LastPages = () => {
    const lastButtons = [];
    for (let i = 36; i <= 42; i++) {
      lastButtons.push(
        <PaginationButton
          key={i}
<<<<<<< HEAD
          onClick={() => setPageNumber(i)}
=======
          onClick={() => goToPage(i)}
>>>>>>> feat/characters-pagination
          isActive={pageNumber === i ? true : false}
        >
          {i}
        </PaginationButton>
      );
    }
    return (
      <>
<<<<<<< HEAD
        <PaginationButton onClick={() => setPageNumber(1)}>1</PaginationButton>
        <PaginationButton onClick={() => setPageNumber(35)}>
          ...
        </PaginationButton>
=======
        <PaginationButton onClick={() => goToPage(1)}>1</PaginationButton>
        <PaginationButton onClick={() => goToPage(35)}>...</PaginationButton>
>>>>>>> feat/characters-pagination
        {lastButtons.map(btn => btn)}
      </>
    );
  };

  return pageNumber < 6 ? <FirstPages /> : <LastPages />;
};

export default StaticPagination;
