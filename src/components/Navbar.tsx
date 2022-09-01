import { MdOutlineWbSunny } from "react-icons/md";

const Navbar = (): JSX.Element => (
  <div className="pb-20">
    <div className="bg-zinc-900 text-white px-12 py-4 dark:bg-zinc-700">
      <div className="max-w-7xl m-auto flex justify-between">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 border-indigo-400 border-8 rounded-full"></div>
          <div className="font-bold text-xl">Logoipsum</div>
          <a
            className="bg-zinc-800 dark:bg-zinc-900 font-medium text-sm py-1.5 rounded-md px-4 text-zinc-300 hover:bg-zinc-900"
            href=""
          >
            Link one
          </a>
          <a
            className="font-medium text-sm py-1.5 rounded-md px-4 text-zinc-300 hover:bg-zinc-900"
            href=""
          >
            Link two
          </a>
          <a
            className="font-medium text-sm py-1.5 rounded-md px-4 text-zinc-300 hover:bg-zinc-900"
            href=""
          >
            Link three
          </a>
        </div>
        <div className="flex items-center">
          <MdOutlineWbSunny size="1.25rem" className="fill-zinc-400" />
        </div>
      </div>
    </div>
  </div>
);

export default Navbar;
