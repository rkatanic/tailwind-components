import { MdOutlineWbSunny } from "react-icons/md";

const Navbar = (): JSX.Element => (
  <div className="pb-20 dark:bg-gray-800">
    <div className="bg-gray-800 text-white px-12 py-4 dark:bg-gray-900">
      <div className="max-w-7xl m-auto flex justify-between">
        <div className="flex items-center gap-6">
          <div className="font-semibold text-xl">Logoipsum</div>
          <a
            className="bg-gray-900 font-medium text-sm py-1.5 rounded-md px-4 text-gray-300 hover:bg-gray-900"
            href=""
          >
            Link one
          </a>
          <a
            className="font-medium text-sm py-1.5 rounded-md px-4 text-gray-300 hover:bg-gray-900"
            href=""
          >
            Link two
          </a>
          <a
            className="font-medium text-sm py-1.5 rounded-md px-4 text-gray-300 hover:bg-gray-900"
            href=""
          >
            Link three
          </a>
        </div>
        <div className="flex items-center">
          <MdOutlineWbSunny size="1.5rem" className="fill-gray-400" />
        </div>
      </div>
    </div>
  </div>
);

export default Navbar;
