import { useState } from "react";
import {
  LayoutDashboard,
  Truck,
  FileText,
  Store,
  CreditCard,
  MapPin,
  Settings,
  Key,
  HelpCircle,
  LogOut,
  Menu,
  X,
  Bell,
  ChevronDown,
} from "lucide-react";
import Logo from "../components/logo/Logo";
import useAuth from "../hooks/useAuth";
import { Link, NavLink, Outlet } from "react-router";

function DashBoardLayout() {
  const { user, logOut } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/dashboard",
    },
    {
      name: "My Parcels",
      icon: <Truck size={20} />,
      path: "/dashboard/myParcels",
    },
    {
      name: "Payment History",
      icon: <FileText size={20} />,
      path: "/dashboard/payment-history",
    },
    { name: "Stores", icon: <Store size={20} />, path: "/stores" },
    {
      name: "Pricing Plan",
      icon: <CreditCard size={20} />,
      path: "/pricing-plan",
    },
    {
      name: "Coverage Area",
      icon: <MapPin size={20} />,
      path: "/dashboard/covarage-area",
    },
  ];

  const generalItems = [
    { name: "Settings", icon: <Settings size={20} /> },
    { name: "Change Password", icon: <Key size={20} /> },
    { name: "Help", icon: <HelpCircle size={20} /> },
    // { name: "Logout", icon: <LogOut size={20} /> },
  ];

  const getInitials = (name = "") => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };
  return (
    <div>
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
        {/* --- TOP NAVBAR --- */}
        <nav className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 md:px-8 z-30">
          <div className="flex items-center gap-4">
            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg md:hidden text-gray-600"
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Brand Logo */}
            <Logo
              width="30px"
              textSize="text-xl md:text-2xl"
              marginBottom="mb-2"
            />
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Notification Badge */}
            <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600 relative">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User Profile */}
            <div className="flex items-center gap-2 cursor-pointer p-1.5 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center font-semibold text-sm text-gray-700">
                {getInitials(user?.displayName || "User")}
              </div>
              <div className="hidden sm:block text-left">
                <p className="text-sm font-semibold text-gray-900 leading-none">
                  {user?.displayName}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  {user?.role || "user"}
                </p>
              </div>
              <ChevronDown
                size={16}
                className="text-gray-500 hidden sm:block"
              />
            </div>
          </div>
        </nav>

        {/* --- LEFT SIDEBAR --- */}
        {/* Mobile Backdrop Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <aside
          className={`
        fixed top-16 bottom-0 left-0 w-64 bg-white border-r border-gray-100 p-4 overflow-y-auto z-45 transition-transform duration-300 ease-in-out
        md:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
        >
          {/* Menu Section */}
          <div>
            <p className="text-xs font-semibold text-gray-400 tracking-wider uppercase px-3 mb-2">
              Menu
            </p>
            <ul className="space-y-1">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    end
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-all duration-200
          ${
            isActive
              ? "bg-primary text-gray-900 shadow-sm shadow-primary/20"
              : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
          }`
                    }
                  >
                    {item.icon}
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* General Section */}
          <div className="mt-8">
            <p className="text-xs font-semibold text-gray-400 tracking-wider uppercase px-3 mb-2">
              General
            </p>
            <ul className="space-y-1">
              {generalItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.name.toLowerCase().replace(" ", "-")}`}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200"
                  >
                    {item.icon}
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  onClick={handleLogout}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200"
                >
                  <LogOut size={20} />
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        {/* --- MAIN CONTENT AREA WRAPPER --- */}
        <main className="pt-16 md:pl-64 min-h-screen">
          <div className="p-4 md:p-8 max-w-7xl mx-auto">
            {/* Your main dashboard contents, grid metrics, and charts go here */}
            <Outlet></Outlet>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashBoardLayout;
