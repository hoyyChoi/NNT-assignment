import styled from "styled-components";
import wine from "../../assets/wine.png";
import grape from "../../assets/detailpage/grape.svg";
import arrow from "../../assets/detailpage/arrow_purple.svg";
import wineInfo from "../../assets/detailpage/wineinfo.svg";
import like from "../../assets/detailpage/like.svg";
import badge from "../../assets/detailpage/badge.svg";
import price from "../../assets/detailpage/price.svg";
import priceChart from "../../assets/detailpage/priceChart.svg";
import React from "react";

const contents = ["Perfect for aging and enjoying later", "98 by Robert Parker (2018 Vintage)"];

export const WineInfo = () => {
  return (
    <Container>
      <Infomation>
        <img src={wine} alt="wine" />
        <div className="infomation">
          <div className="infomationTop">
            <div className="first">
              <img src={grape} alt="grape" />
              Writing Tasting Note
              <img src={arrow} alt=">" />
            </div>
            <div className="second">
              USA{" > "}California{" > "}Napa Valley
            </div>
            <div className="title">2018 opus one</div>
            <img src={wineInfo} alt="3" />
          </div>
          <img src={like} alt="like" height={80} />
        </div>
      </Infomation>
      <div className="contentList">
        {contents.map((content, idx) => (
          <React.Fragment key={idx}>
            <div className="contentWrapper">
              <img src={badge} alt="*" />
              <div className="content">{content}</div>
            </div>
          </React.Fragment>
        ))}
      </div>
      <img src={price} alt="price" />
      <img src={priceChart} alt="priceChart" />
    </Container>
  );
};

const Container = styled.div`
  .contentList {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 32px;
  }
  .contentWrapper {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .content {
    color: #49454e;
  }
  img[alt="priceChart"] {
    margin-top: 19px;
  }
`;
const Infomation = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 15px;
  .infomation {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }
  .infomationTop {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .first {
    display: flex;
    align-items: center;
    gap: 4px;
    color: #6d23f9;
  }
  .second {
    margin-top: 8px;
    color: #7a757f;
  }
  .title {
    margin: 14px 0;
    font-size: 24px;
    font-weight: 700;
  }
`;
