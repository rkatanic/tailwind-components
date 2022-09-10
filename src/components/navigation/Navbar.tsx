import { MdOutlineWbSunny } from "react-icons/md";
import { VscSignOut } from "react-icons/vsc";

const Navbar = (): JSX.Element => (
  <div className="pb-20">
    <div className="px-12 py-4 border-b-2 border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl m-auto flex justify-between">
        <div className="flex items-center gap-8">
          <div className="flex gap-3 items-center">
            <div className="w-8 h-8 border-cyan-400 border-8 rounded-full"></div>
            <div className="font-bold text-md text-gray-900 dark:text-gray-100">
              <span className="text-cyan-400">Logo</span>ipsum
            </div>
          </div>
          <a
            className="before:absolute before:-bottom-[24px] before:w-full before:h-[2px] before:bg-cyan-400 relative font-medium text-sm text-gray-900 dark:text-gray-100"
            href=""
          >
            Link one
          </a>
          <a
            className="before:absolute before:-bottom-[24px] dark:before:hover:bg-gray-700 before:w-full before:h-[2px] before:hover:bg-gray-200 relative font-medium text-sm text-gray-300"
            href=""
          >
            Link two
          </a>
          <a
            className="before:absolute before:-bottom-[24px] dark:before:hover:bg-gray-700 before:w-full before:h-[2px] before:hover:bg-gray-200 relative font-medium text-sm text-gray-300"
            href=""
          >
            Link three
          </a>
        </div>
        <div className="flex items-center gap-2 text-sm font-medium text-gray-400 dark:text-gray-300 cursor-pointer">
          <VscSignOut size="1.25rem" className="fill-gray-300" /> Logout
        </div>
      </div>
    </div>
  </div>
);

export default Navbar;
