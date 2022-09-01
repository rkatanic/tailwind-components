import { NavLink } from "react-router-dom";

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
    <div className="w-72">
      {LINKS.map(({ title, link }) => (
        <NavLink
          to={link}
          className={({ isActive }) =>
            `${
              isActive
                ? "before:absolute before:w-1 before:h-7 before:top-1 before:-left-2 before:rounded-md before:bg-indigo-400 bg-zinc-100 dark:bg-zinc-700"
                : ""
            } block relative rounded-md py-2 px-4  dark:text-zinc-300 text-sm font-semibold`
          }
        >
          {title}
        </NavLink>
      ))}
    </div>
  );
};

export default Navigation;
