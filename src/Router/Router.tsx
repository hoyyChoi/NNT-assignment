import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ListPage } from "../pages/ListPage";
import Layout from "../Layout";

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<ListPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
