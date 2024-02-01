import styled from "styled-components";
import category1 from "../../assets/category1.svg";
import category2 from "../../assets/category2.svg";
import category3 from "../../assets/category3.svg";
import category4 from "../../assets/category4.svg";
import React from "react";

const categories = [category1, category2, category3, category4];

const Category = () => {
	return (
		<Container>
			{categories.map((category, idx) => (
				<React.Fragment key={idx}>
					<img src={category} alt={category} />
				</React.Fragment>
			))}
		</Container>
	);
};

export default Category;

const Container = styled.div`
	display: flex;
	justify-content: space-around;
	padding-top: 6px;
`;
