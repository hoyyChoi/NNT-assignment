import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ListPage } from "../pages/ListPage";
import { DetailPage } from "../pages/DetailPage";
import { Layout } from "../layout/Layout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ListPage />} />
          <Route path="/detail/:slug" element={<DetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
