import { NavLink } from "react-router-dom";

const menus = [
  {
    name: "Dashboard",
    path: "/",
  },
];

export default function Sidebar() {
  return (
    <div className="w-64 h-screen border-r bg-white p-4">

      <h1 className="text-2xl font-bold mb-8">
        AI Studio
      </h1>

      <div className="flex flex-col gap-2">

        {menus.map((menu) => (
          <NavLink
            key={menu.path}
            to={menu.path}
            className={({ isActive }) =>
              `p-3 rounded-xl transition
              ${
                isActive
                  ? "bg-violet-500 text-white"
                  : "hover:bg-gray-100 text-gray-700"
              }`
            }
          >
            {menu.name}
          </NavLink>
        ))}

      </div>

    </div>
  );
}