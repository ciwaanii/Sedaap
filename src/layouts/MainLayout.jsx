import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function MainLayout() {
  const location = useLocation();
  const isErrorPage = location.pathname.startsWith('/error');

  return (
    <div id="app-container" className="bg-gray-100 min-h-screen flex">
      <div id="layout-wrapper" className="flex flex-row flex-1/">
        {!isErrorPage && <Sidebar />}
        <div id="main-content" className="flex-1 p-4">
          {!isErrorPage && <Header />}
          <Outlet />
        </div>
      </div>
    </div>
  );
}
