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
    <div className="z-10 w-full max-w-7xl m-auto flex gap-4 justify-between py-4 mb-8 border-b dark:border-zinc-600">
      <h1 className="text-xl font-bold dark:text-zinc-200">Components</h1>
      <VscColorMode
        onClick={handleDarkModeToggle}
        className="fill-zinc-600 cursor-pointer dark:fill-zinc-400"
      />
    </div>
  );
};

export default Header;
