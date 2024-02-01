import Category from "../components/ListPage/Category";
import { ListTitle } from "../components/ListPage/ListTitle";
import { WineList } from "../components/ListPage/WineList";

export const ListPage = () => {
	return (
		<>
			<Category />
			<ListTitle />
			<WineList />
		</>
	);
};
