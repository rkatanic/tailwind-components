import { VscColorMode } from "react-icons/vsc";

const Header = (): JSX.Element => {
  const handleDarkModeToggle = () => {
    if (document.body.classList.contains("dark")) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  };

  return (
    <div className="z-10 w-full border-b border-gray-100 dark:border-gray-800 mb-8">
      <div className="m-auto max-w-7xl flex gap-4 items-end justify-between py-4">
        <h1 className="text-lg font-bold text-gray-700 dark:text-gray-100">
          Components
        </h1>
        <button
          className="border p-2 px-2.5 rounded-md hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-900"
          onClick={handleDarkModeToggle}
          type="button"
        >
          <VscColorMode
            size="1rem"
            className="fill-gray-500 cursor-pointer dark:fill-gray-300"
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
