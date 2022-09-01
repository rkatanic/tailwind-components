import { FiSearch } from "react-icons/fi";

const InputWithLeadingIcon = (): JSX.Element => (
  <div className="relative">
    <FiSearch
      size="0.875rem"
      className="absolute top-2.5 left-3 stroke-zinc-400 dark:stroke-zinc-500"
    />
    <input
      type="text"
      name="input"
      className="shadow-sm w-72 text-sm text-zinc-800 px-3 pl-8 py-1.5 rounded-md border bg-white border-zinc-300 placeholder:text-zinc-400 focus:outline-indigo-500 focus:ring-indigo-500 focus:outline-0 dark:focus:border-indigo-500 dark:border-zinc-600 dark:text-zinc-100 dark:bg-zinc-800"
      placeholder="Search"
    />
  </div>
);

export default InputWithLeadingIcon;
