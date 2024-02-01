import styled from "styled-components";
import wine from "../../assets/wine.png";

export const WineItem = () => {
	return (
		<Container>
			<img src={wine} alt="wine" />
			<div className="wineContents">
				<div className="title">Le Corti Don Tommaso Chianti Classico 2016</div>
				<div className="middleContents flex">
					<div className="price">$28.6</div>
					<div className="volume">750ml</div>
				</div>
				<div className="lastContents flex">
					<div className="year">2017</div>
					<div className="country">Spain</div>
				</div>
			</div>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	gap: 14px;
	border-bottom: 1px solid #232323;
	padding-bottom: 17px;
	.flex {
		display: flex;
	}
	.wineContents {
		padding-top: 18px;
	}
	.wineContents .title {
		font-weight: 500;
		font-size: 18px;
		line-height: 20px;
		width: 200px;
	}
	.middleContents {
		margin-top: 3px;
		gap: 8px;
		line-height: 29px;
		align-items: baseline;
	}
	.middleContents .price {
		font-size: 26px;
		font-weight: 700;
	}
	.middleContents .volume {
		font-weight: 400;
		font-size: 14px;
		color: #000000b2;
	}
	.lastContents {
		margin-top: 22px;
		gap: 17px;
		color: #4d4d4d;
		font-weight: 400;
		font-size: 14px;
		line-height: 17.6px;
	}
`;
