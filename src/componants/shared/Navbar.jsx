import { Link } from "react-router";
import { useUser } from "../../Context/useUser";

const Navbar = () => {
  const { user } = useUser();
  console.log(user);

  return (
    <div className="navbar bg-[#cfe9f8]">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">
                <a>Home</a>
              </Link>
            </li>
            {user ? (
              <li className="text-white">
                {/* Access user properties safely */}

                <span className="font-bold">{user.name || user.email}</span>
              </li>
            ) : (
              <li>
                <Link to="/login" className="text-white hover:underline">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-[#3d64e6]">Organice Food</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">
              <a>Home</a>
            </Link>
          </li>
          {user ? (
            // If the user is logged in, display their name or email
            <>
              <li className="">
                {" "}
                <p>{user.name}</p>
              </li>
              {user.role === "customer" && (
                <li>
                  <Link to="/my-orders">My Orders</Link>
                </li>
              )}
              {user.role === "adminrefat" && (
                <li>
                  <Link to="/all-orders">All Orders</Link>
                </li>
              )}
            </>
          ) : (
            // If the user is not logged in, display the login link
            <li>
              <Link to="/login" className="hover:underline">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
