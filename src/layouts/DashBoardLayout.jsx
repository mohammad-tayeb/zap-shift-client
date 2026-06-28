import { useState } from "react";
import {
  LayoutDashboard,
  Truck,
  FileText,
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
  CheckCircle,
  UserCog,
  UserCheck,
  ClipboardCheck,
  LayoutDashboardIcon,
} from "lucide-react";

import Logo from "../components/logo/Logo";
import useAuth from "../hooks/useAuth";
import { NavLink, Outlet } from "react-router";
import useRole from "../hooks/useRole";

function DashBoardLayout() {
  const { role } = useRole();
  console.log(role);
  const { user, logOut } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    logOut().catch((error) => {
      console.log(error);
    });
  };

  const getInitials = (name = "") => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const navClass = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-all duration-200
    ${isActive
      ? "bg-primary text-gray-900 shadow-sm shadow-primary/20"
      : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
    }`;

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/dashboard",
      roles: ["admin"],
    },
    {
      name: "My Parcels",
      icon: <Truck size={20} />,
      path: "/dashboard/myParcels",
      roles: ["user", "admin"],
    },
    {
      name: "Payment History",
      icon: <FileText size={20} />,
      path: "/dashboard/payment-history",
      roles: ["user", "admin"],
    },
    {
      name: "Approve Riders",
      icon: <CheckCircle size={20} />,
      path: "/dashboard/approveRiders",
      roles: ["admin"],
    },
    {
      name: "Assign Riders",
      icon: <UserCheck size={20} />, // or Truck, Users, Bike, etc.
      path: "/dashboard/assignRiders",
      roles: ["admin"],
    },
    {
      name: "Manage Users",
      icon: <UserCog size={20} />,
      path: "/dashboard/manageUsers",
      roles: ["admin"],
    },
    {
      name: "Pricing Plan",
      icon: <CreditCard size={20} />,
      path: "/pricing-plan",
      roles: ["user", "admin"],
    },
    {
      name: "Coverage Area",
      icon: <MapPin size={20} />,
      path: "/dashboard/covarage-area",
      roles: ["admin"],
    },
    {
      name: "Dashboard",
      icon: <LayoutDashboardIcon size={20} />,
      path: "/dashboard/riderStatics",
      roles: ["rider"],
    },
    {
      name: "Assigned Parcels",
      icon: <ClipboardCheck size={20} />,
      path: "/dashboard/acceptParcel",
      roles: ["rider"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* --- TOP NAVBAR --- */}
      <nav className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 md:px-8 z-30">
        <div className="flex items-center gap-4">
          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg md:hidden text-gray-600"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Logo
            width="30px"
            textSize="text-xl md:text-2xl"
            marginBottom="mb-2"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600 relative">
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="flex items-center gap-2 cursor-pointer p-1.5 hover:bg-gray-50 rounded-lg">
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center font-semibold text-sm text-gray-700">
              {getInitials(user?.displayName || "User")}
            </div>

            <div className="hidden sm:block text-left">
              <p className="text-sm font-semibold text-gray-900 leading-none">
                {user?.displayName}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">{role || "user"}</p>
            </div>

            <ChevronDown size={16} className="text-gray-500 hidden sm:block" />
          </div>
        </div>
      </nav>

      {/* --- BACKDROP --- */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* --- SIDEBAR --- */}
      <aside
        className={`
          fixed top-16 bottom-0 left-0 w-64 bg-white border-r border-gray-100 p-4 overflow-y-auto z-50
          transition-transform duration-300 ease-in-out
          md:translate-x-0
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* MENU */}
        <p className="text-xs font-semibold text-gray-400 uppercase px-3 mb-2">
          Menu
        </p>

        <ul className="space-y-1">
          {menuItems
            .filter((item) => item.roles.includes(role))
            .map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/dashboard"} // 👈 IMPORTANT FIX
                  className={navClass}
                >
                  {item.icon}
                  {item.name}
                </NavLink>
              </li>
            ))}
        </ul>

        {/* GENERAL */}
        <div className="mt-8">
          <p className="text-xs font-semibold text-gray-400 uppercase px-3 mb-2">
            General
          </p>

          <ul className="space-y-1">
            <li>
              <a
                href="#settings"
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              >
                <Settings size={20} />
                Settings
              </a>
            </li>

            <li>
              <a
                href="#change-password"
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              >
                <Key size={20} />
                Change Password
              </a>
            </li>

            <li>
              <a
                href="#help"
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              >
                <HelpCircle size={20} />
                Help
              </a>
            </li>

            <li>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              >
                <LogOut size={20} />
                Logout
              </button>
            </li>
          </ul>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="pt-16 md:pl-64 min-h-screen">
        <div className="p-4 md:p-8 max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default DashBoardLayout;
