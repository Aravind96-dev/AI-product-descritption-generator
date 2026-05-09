import {
    Bell,
    Search,
    User
  } from "lucide-react";
  
  function Topbar() {
    return (
      <header className="h-16 bg-white border-b flex items-center justify-between px-6">
  
        {/* Left Section */}
        <div>
          <h1 className="text-xl font-semibold">
            AI Product Studio
          </h1>
        </div>
  
        {/* Right Section */}
        <div className="flex items-center gap-4">
  
          {/* Search */}
          <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg">
  
            <Search size={18} />
  
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none ml-2"
            />
  
          </div>
  
          {/* Notification */}
          <button className="relative p-2 rounded-lg hover:bg-gray-100">
            <Bell size={20} />
          </button>
  
          {/* User */}
          <div className="w-10 h-10 rounded-full bg-violet-500 text-white flex items-center justify-center">
            <User size={18} />
          </div>
  
        </div>
  
      </header>
    );
  }
  
  export default Topbar;