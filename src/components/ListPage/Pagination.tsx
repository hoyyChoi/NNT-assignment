import styled from "styled-components";
import arrow from "../../assets/pageArrow.svg";
export const Pagination = ({ page, setPage }: { page: number; setPage: (page: number) => void }) => {
  const PaginationFunc = (type: string) => {
    if (type === "pre" && page > 1) {
      setPage(page - 1);
    } else if (type === "next" && page < 5) {
      setPage(page + 1);
    }
  };

  return (
    <Container>
      <img className="pre" onClick={() => PaginationFunc("pre")} src={arrow} alt="<" />
      <div>{page} of 5</div>
      <img className="next" onClick={() => PaginationFunc("next")} src={arrow} alt=">" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: flex-end;
  margin-top: 10px;
  padding: 0 16px 300px;
  img {
    cursor: pointer;
  }
  .next {
    transform: rotate(180deg);
  }
`;
