import { Link, NavLink } from "react-router";
import Logo from "../../../components/logo/Logo";
import useAuth from "../../../hooks/useAuth";

function Navbar() {
  const { user, logOut } = useAuth();
  console.log(user);

  // handle logout funtionality
  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li className="font-bold text-gray-600 hover:text-secondary">
        <NavLink className="hover:bg-transparent" to="/pricing">
          Pricing
        </NavLink>
      </li>

      <li className="font-bold text-gray-600 hover:text-secondary">
        <NavLink to="/covarage" className="hover:bg-transparent">
          Coverage
        </NavLink>
      </li>

      <li className="font-bold text-gray-600 hover:text-secondary">
        <NavLink className="hover:bg-transparent" to="/aboutUs">
          About Us
        </NavLink>
      </li>

      <li className="font-bold text-gray-600 hover:text-secondary">
        <NavLink className="hover:bg-transparent" to="/be-a-rider">
          Be a Rider
        </NavLink>
      </li>

      <li className="font-bold text-gray-600 hover:text-secondary">
        <NavLink className="hover:bg-transparent" to="/send-a-parcel">
          Send a Parcel
        </NavLink>
      </li>
      
      {user ? (
        <li className="font-bold text-gray-600 hover:text-secondary">
          <NavLink className="hover:bg-transparent" to="/dashboard" end>
            Dashboard
          </NavLink>
        </li>
      ) : (
        ""
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm text-secondary mx-auto max-w-7xl z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="btn bg-transparent border-none shadow-none">
          <Logo
            width="30px"
            textSize="text-xl md:text-2xl"
            marginBottom="mb-2"
          />
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* login and register button */}
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center">
            <span className="text-secondary md:me-4 me-1">
              {user.displayName}
            </span>
            <Link
              onClick={handleLogout}
              className="md:btn-md btn-sm btn btn-primary text-secondary me-1"
            >
              Logout
            </Link>
          </div>
        ) : (
          <Link
            to="/login"
            className="md:btn-md btn-sm btn text-secondary me-1"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
