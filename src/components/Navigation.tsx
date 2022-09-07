import { NavLink } from "react-router-dom";
import { TbChevronRight } from "react-icons/tb";
import { IoIosMenu } from "react-icons/io";

import "./Navigation.css";

const LINKS = [
  { title: "Navigation", link: "navigation" },
  { title: "Button", link: "button" },
  { title: "Input & Select", link: "input" },
  { title: "Checkbox & Radio", link: "checkbox-and-radio" },
  { title: "Popup", link: "popup" },
  { title: "Table", link: "table" },
  { title: "Form", link: "form" },
  { title: "Badges", link: "badges" },
  { title: "Stats", link: "stats" },
];

const Navigation = (): JSX.Element => {
  return (
    <div className="w-72 border rounded-md overflow-hidden dark:border-gray-700">
      <div className="flex items-center gap-2 relative py-4 px-4 text-sm text-gray-700 font-semibold border-b dark:border-gray-700 dark:text-gray-200">
        <IoIosMenu size="1rem" className="fill-gray-900 dark:fill-gray-200" />{" "}
        Components
      </div>
      {LINKS.map(({ title, link }) => (
        <NavLink
          to={link}
          className={({ isActive }) =>
            `${
              isActive
                ? "active bg-cyan-500 text-white"
                : "text-gray-700 dark:text-zinc-200"
            } flex items-center justify-between relative py-4 px-4 text-sm font-medium last-of-type:border-none border-b border-gray-100 dark:border-gray-800`
          }
        >
          {title}
          <TbChevronRight className="stroke-gray-400 dark:stroke-gray-600" />
        </NavLink>
      ))}
    </div>
  );
};

export default Navigation;
