import styled from "styled-components";
import aroma from "../../assets/detailpage/Aroma-info.svg";
import grapes from "../../assets/detailpage/Grapes-info.svg";
import decant from "../../assets/detailpage/decant-info.svg";
import pairing from "../../assets/detailpage/Pairing-info.svg";
import region from "../../assets/detailpage/Region-info.svg";
import tasting from "../../assets/detailpage/tastingNote.svg";
import React from "react";

const images = [tasting, grapes, region, aroma, pairing, decant];
export const DetailInfo = () => {
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
  margin: 30px 0 138px;
  display: flex;
  flex-direction: column;
  gap: 45px;
`;
