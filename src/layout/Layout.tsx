import { Outlet } from "react-router-dom";
import { Header } from "../pages/common/Header";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
