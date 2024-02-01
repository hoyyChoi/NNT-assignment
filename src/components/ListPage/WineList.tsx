import styled from "styled-components";
import { WineItem } from "./WineItem";

export const WineList = () => {
	return (
		<Container>
			<WineItem />
		</Container>
	);
};

const Container = styled.div`
	margin-top: 30px;
`;
