import styled from "styled-components";
import { WineInfo } from "../components/DetailPage/WineInfo";
import { DetailCategory } from "../components/DetailPage/DetailCategory";
import { useState } from "react";
import { DetailInfo } from "../components/DetailPage/DetailInfo";
import { DetailPrice } from "../components/DetailPage/DetailPrice";

export const DetailPage = () => {
  const [category, setCategory] = useState<string>("info");
  return (
    <Container>
      <WineInfo />
      <DetailCategory category={category} setCategory={setCategory} />
      {category === "info" ? <DetailInfo /> : <DetailPrice />}
    </Container>
  );
};

const Container = styled.div`
  padding: 8px 15px 0;
`;
