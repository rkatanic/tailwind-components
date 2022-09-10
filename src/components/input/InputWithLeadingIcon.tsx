import { FiSearch } from "react-icons/fi";

const InputWithLeadingIcon = (): JSX.Element => (
  <div className="relative">
    <FiSearch
      size="0.875rem"
      className="absolute top-3 left-3 stroke-gray-500 dark:stroke-gray-400"
    />

    <input
      required
      type="text"
      name="input"
      className="w-72 text-sm text-gray-900 px-3 py-2 pl-9 rounded-md border border-gray-200 placeholder:text-gray-400 focus:outline-cyan-500 focus:ring-cyan-500 focus:outline-0 dark:text-gray-50 dark:border-gray-700 dark:bg-black"
      placeholder="Search"
    />
  </div>
);

export default InputWithLeadingIcon;
