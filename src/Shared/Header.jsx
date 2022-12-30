import React, { useContext } from "react";
import { useState } from "react";
// import { useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Authcontext/Authcontext";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(UserContext);
  const [isopen, setOpen] = useState(false);
  console.log(isopen);
  const toogleMenu = () => {
    setOpen(!isopen);
  };
  const logOutUser = () => {
    logOut()
      .then(() => {
        alert("logout successfully");
      })
      .catch((error) => {});
  };
  return (
    <div>
      <header aria-label="Site Footer" className=" bg-gray-50 ">
        <div className="main_class mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-teal-600 sm:justify-start">
            <h1 className="text-2xl font-bold">Task Manager</h1>
            </div>
            <ul className="flex items-center justify-center gap-6 text-sm ">
              <li>
                <button
                  onClick={toogleMenu}
                  class="  block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                >
                  <span class="sr-only">Toggle menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </li>
            </ul>

            <ul className="desktop flex items-center justify-center gap-6 text-sm">
              <Link to="/">Home</Link>
              <Link to="/addtask">Add Task</Link>
              <Link to="/mytask">My Task</Link>
              <Link to="/complete">Completed Task</Link>
              {user?.uid ? (
                <>
                  <li onClick={logOutUser}>
                    <Link>Logout</Link>
                  </li>
                </>
              ) : (
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/signup">Signup</Link>
                </>
              )}
            </ul>

            <ul className={"mobile  text-sm " + (isopen ? " show" : " hide")}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/addtask">Add Task</Link>
              </li>
              <li>
                <Link to="/mytask">My Task</Link>
              </li>
              <li>
                {" "}
                <Link to="/complete">Completed Task</Link>
              </li>
              {user?.uid ? (
                <>
                  <li onClick={logOutUser}>
                    <Link>Logout</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/signup">Signup</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
