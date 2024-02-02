import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ListPage } from "../pages/ListPage";
import { DetailPage } from "../pages/DetailPage";
import { Layout } from "../layout/Layout";
import { ScrollToTop } from "../pages/common/ScrollToTop";

export const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ListPage />} />
          <Route path="/detail/:slug" element={<DetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
