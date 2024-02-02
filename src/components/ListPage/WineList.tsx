import styled from "styled-components";
import { WineItem } from "./WineItem";
import { useRecoilValue } from "recoil";
import { wineListState } from "../../store/atom";
import React from "react";

export const WineList = () => {
  const wineList = useRecoilValue(wineListState);
  return (
    <Container>
      {wineList.map((wine, idx) => (
        <React.Fragment key={idx}>
          <WineItem wine={wine} />
        </React.Fragment>
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
