import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import logo from "../honeyLogo.png";
import Menu from "../components/Menu";
import { Link } from "react-router-dom";
const cookies = new Cookies();
const token = cookies.get("TOKEN");

function NavBar() {
  const navigate = useNavigate();
  const logout = () => {
    cookies.remove("TOKEN", { path: "/" });
    window.location.href = "/";
  };

  const login = () => {
    navigate("/login");
  };

  return (
    <div className=" bg-slate-800 shadow-md">
      <div className="px-8 w-full">
        <div className="relative flex h-28 items-center justify-between">
          <div className="flex flex-1 justify-start items-center">
            <a href="/" className="flex items-center w-24">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="hidden ml-6 sm:flex">
            <div className="flex space-x-6">
              <Link to={"apiarys"}>
                <button className="bg-yellow-600 text-black hover:bg-yellow-500 px-3 py-2 rounded-md text-lg font-medium no-underline">
                  Apiary's
                </button>
              </Link>

              <Link to={"qrscan"}>
                <button className="bg-yellow-600 text-black hover:bg-yellow-500 px-3 py-2 rounded-md text-lg font-medium no-underline">
                  QR Scan
                </button>
              </Link>
            </div>
            <div className=" ml-9 mt-2">
              {token ? (
                <span
                  onClick={() => logout()}
                  className=" text-yellow-600 text-xl font-semibold cursor-pointer hover:text-yellow-500 inline-block"
                >
                  Logout
                </span>
              ) : (
                <span
                  onClick={() => login()}
                  className=" text-yellow-600 text-xl font-semibold cursor-pointer hover:text-yellow-500 inline-block"
                >
                  Login
                </span>
              )}
            </div>
          </div>
          <div className="sm:hidden">
            <Menu />
          </div>
          {/* <div class="space-y-4 sm:hidden cursor-pointer">
            <div class="w-16 h-2 bg-yellow-600 rounded-md"></div>
            <div class="w-16 h-2 bg-yellow-600 rounded-md"></div>
            <div class="w-16 h-2 bg-yellow-600 rounded-md"></div>
            <Menu />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
