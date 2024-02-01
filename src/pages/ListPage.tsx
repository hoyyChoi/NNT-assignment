import { useEffect, useState } from "react";
import Category from "../components/ListPage/Category";
import { ListTitle } from "../components/ListPage/ListTitle";
import { WineList } from "../components/ListPage/WineList";
import { getWineList } from "../apis/listPage";
import { useSetRecoilState } from "recoil";
import { titleState, wineListState } from "../recoil";
import { Pagination } from "../components/ListPage/Pagination";

export const ListPage = () => {
	const [page, setPage] = useState<number>(1);
	const setTitle = useSetRecoilState(titleState);
	const setWineList = useSetRecoilState(wineListState);
	const ListPageRendering = async () => {
		try {
			const data = await getWineList("france", page);
			setTitle({ country: data.breadcrumbs[1].name, wine: data.breadcrumbs[0].slug });
			setWineList(data.items);
		} catch {
			alert("server error");
			new Error("server error");
		}
	};
	useEffect(() => {
		ListPageRendering();
	}, [page]);
	return (
		<>
			<Category />
			<ListTitle />
			<WineList />
			<Pagination page={page} setPage={setPage} />
		</>
	);
};
