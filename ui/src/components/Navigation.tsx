import * as React from "react";
import { useLocation } from "wouter";

const navLink =
  "block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer";
const navLinkSelected =
  "block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white cursor-pointer";
const getLinkClass = (isActive: boolean): string => {
  return isActive ? navLinkSelected : navLink;
};

export interface IAppProps {}

export function Navigation(props: IAppProps) {
  const [location, setLocation] = useLocation();

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a
          onClick={() => setLocation("/")}
          className="flex items-center cursor-pointer"
        >
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Template
          </span>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                className={getLinkClass(location === "/")}
                onClick={() => setLocation("/")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={getLinkClass(location === "/state")}
                onClick={() => setLocation("/state")}
              >
                State Demo
              </a>
            </li>
            <li>
              <a
                className={getLinkClass(location === "/fetch")}
                onClick={() => setLocation("/fetch")}
              >
                Fetch Demo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
