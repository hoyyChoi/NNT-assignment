import styled from "styled-components";

interface categoryProps {
  category: string;
  setCategory: (category: string) => void;
}

export const DetailCategory = ({ category, setCategory }: categoryProps) => {
  return (
    <Container>
      <div className={`info ${category === "info" && "active"}`} onClick={() => setCategory("info")}>
        Info
      </div>
      <div className={`info ${category === "price" && "active"}`} onClick={() => setCategory("price")}>
        Price
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-top: 16px;
  div {
    font-weight: 600;
    width: 50%;
    text-align: center;
    padding-bottom: 12px;
    color: #cac4cf;
    border-bottom: 2px solid #cac4cf;
    cursor: pointer;
  }
  .active {
    color: #6d23f9;
    border-bottom: 2px solid #6d23f9;
  }
`;
