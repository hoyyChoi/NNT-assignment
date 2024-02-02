import styled from "styled-components";
import addwine from "../../assets/detailpage/addwine.svg";
import priceInfo from "../../assets/detailpage/priceInfo.svg";
import React from "react";

const images = [priceInfo, addwine];

export const DetailPrice = () => {
  return (
    <Container>
      {images.map((image, idx) => (
        <React.Fragment key={idx}>
          <img src={image} alt={image} />
        </React.Fragment>
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin: 30px 0 794px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
