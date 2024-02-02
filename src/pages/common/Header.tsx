import styled from "styled-components";
import logo from "../../assets/logo.svg";
import arrow from "../../assets/backArrow.svg";
import { useRecoilValue } from "recoil";
import { pageNameState } from "../../store/atom";
export const Header = () => {
  const pageName = useRecoilValue(pageNameState);

  return (
    <Container $pageName={pageName}>
      {pageName === "detail" && <img src={arrow} onClick={() => history.back()} alt="<" />}
      <img src={logo} alt="logo" />
    </Container>
  );
};

const Container = styled.div<{ $pageName: string }>`
  display: flex;
  align-items: center;
  gap: 4px;

  margin-top: ${(props) => props.$pageName === "detail" && "44px"};
  padding: ${(props) => (props.$pageName === "detail" ? "20px 0 10px 12px" : "20px 0 10px 40px")};
  img[alt="<"] {
    cursor: pointer;
  }
`;
