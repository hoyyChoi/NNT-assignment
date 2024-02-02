import styled from "styled-components";
import arrow from "../../assets/rightArrow.svg";
import { useRecoilValue } from "recoil";
import { titleState } from "../../recoil";

export const ListTitle = () => {
  const title = useRecoilValue(titleState);
  return (
    <Container>
      <div className="categoryTitle">
        Country <img src={arrow} alt=">" />
        {title.country}
      </div>
      <div className="Title">
        <div className="mainTitle">
          {title.country} {title.wine}
        </div>
        <p className="description">
          Your Wine Journey Begins Here | Explore the Wine Test
          <br />
          Result!
        </p>
      </div>
    </Container>
  );
};
const Container = styled.div`
  margin-top: 16px;
  .categoryTitle {
    display: flex;
    line-height: 25px;
    font-weight: 600;
    color: #4d4d4d;
  }
  .Title {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .mainTitle {
    font-family: "Lexend";
    font-size: 20px;
    line-height: 22px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .mainTitle::before {
    content: "";
    display: block;
    width: 4px;
    height: 24px;
    border-radius: 8px;
    background-color: #232323;
  }
  .description {
    font-weight: 400;
    font-size: 14px;
    line-height: 22.4px;
    white-space: pre-wrap;
  }
`;
