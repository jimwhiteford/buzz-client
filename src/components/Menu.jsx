import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const token = cookies.get("TOKEN");

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const navigate = useNavigate();
  const logout = () => {
    cookies.remove("TOKEN", { path: "/" });
    navigate("/");
  };

  const login = () => {
    navigate("/login");
  };
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="space-y-4">
          <div className="w-16 h-2 bg-yellow-600 rounded-md"></div>
          <div className="w-16 h-2 bg-yellow-600 rounded-md"></div>
          <div className="w-16 h-2 bg-yellow-600 rounded-md"></div>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-2">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/apiarys"
                  className={classNames(
                    active ? "bg-gray-100 " : "text-yellow-500",
                    "block px-4 py-3 text-4xl no-underline hover:text-yellow-700"
                  )}
                >
                  Apiarys
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/QRscan"
                  className={classNames(
                    active ? "bg-gray-100" : "text-yellow-500",
                    "block px-4 py-3 text-4xl no-underline hover:text-yellow-700"
                  )}
                >
                  QR Scanner
                </Link>
              )}
            </Menu.Item>
            {token ? (
              <form>
                <Menu.Item>
                  {({ active }) => (
                    <span
                      onClick={() => logout()}
                      className={classNames(
                        active
                          ? "bg-gray-100 text-yellow-700"
                          : "text-yellow-500",
                        "block w-full px-4 py-3 text-left text-4xl cursor-pointer"
                      )}
                    >
                      Logout
                    </span>
                  )}
                </Menu.Item>
              </form>
            ) : (
              <form>
                <Menu.Item>
                  {({ active }) => (
                    <span
                      onClick={() => login()}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full px-4 py-3 text-left text-4xl cursor-pointer"
                      )}
                    >
                      Login
                    </span>
                  )}
                </Menu.Item>
              </form>
            )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
