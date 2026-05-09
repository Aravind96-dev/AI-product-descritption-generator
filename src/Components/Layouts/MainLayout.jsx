import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar"

function MainLayout() {
  return (

    
    <div className="flex min-h-screen">

    <Sidebar />

    <div className="flex-1 flex flex-col">

      <Topbar />

      <main className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </main>

    </div>
    <div className="bg-red-500 text-white text-5xl p-10">
      Tailwind Working
    </div>

  </div>
  );
}

export default MainLayout;