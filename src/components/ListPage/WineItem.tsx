import styled from "styled-components";
import { WineType } from "../../types";
import { useNavigate } from "react-router-dom";

export const WineItem = ({ wine }: { wine: WineType }) => {
  const navigate = useNavigate();
  const spaceToDetailPage = (slug: string) => {
    navigate(`/detail/${slug}`);
  };
  return (
    <Container onClick={() => spaceToDetailPage(wine.slug)}>
      <img src={`https://image.veenoverse.com${wine.image.thumb}`} alt="wine" />
      <div className="wineContents">
        <div className="title">{wine.name}</div>
        <div className="middleContents flex">
          <div className="price">${wine?.price?.value || 0}</div>
          <div className="volume">{wine.volume}ml</div>
        </div>
        <div className="lastContents flex">
          <div className="year">{wine.vintage}</div>
          <div className="country">{wine.country.name}</div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 14px;
  border-bottom: 1px solid #232323;
  padding-bottom: 17px;
  cursor: pointer;
  img {
    width: 45px;
    height: 172px;
    padding: 0 30px;
  }
  .flex {
    display: flex;
  }
  .wineContents {
    padding-top: 18px;
  }
  .wineContents .title {
    font-family: "Lexend";
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
  }
  .middleContents {
    margin-top: 5px;
    gap: 8px;
    line-height: 29px;
    align-items: baseline;
  }
  .middleContents .price {
    font-size: 26px;
    font-weight: 700;
  }
  .middleContents .volume {
    font-weight: 400;
    font-size: 14px;
    color: #000000b2;
  }
  .lastContents {
    margin-top: 22px;
    gap: 17px;
    color: #4d4d4d;
    font-weight: 400;
    font-size: 14px;
    line-height: 17.6px;
  }
`;
