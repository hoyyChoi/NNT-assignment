import styled from "styled-components";
import logo from "../../assets/logo.svg";
export const Header = () => {
	return (
		<Container>
			<img src={logo} alt="logo" />
		</Container>
	);
};

const Container = styled.div`
	padding: 20px 0 10px 40px;
`;
