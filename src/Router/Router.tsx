import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ListPage } from "../pages/ListPage";
import Layout from "../Layout";
import { DetailPage } from "../pages/DetailPage";

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
