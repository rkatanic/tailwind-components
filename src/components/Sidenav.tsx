import {
  FiEdit2,
  FiEye,
  FiDownload,
  FiXCircle,
  FiTrash2,
  FiSave,
} from "react-icons/fi";
import { VscColorMode } from "react-icons/vsc";

const Sidenav = (): JSX.Element => {
  return (
    <div className="flex bg-zinc-50 dark:bg-zinc-900/50 dark:bg-opacity-40">
      <div className="w-32 bg-gradient-to-b from-emerald-600 to-teal-600 flex flex-col items-center gap-12">
        <div className="flex items-center justify-center h-16 bg-emerald-700/70 w-full">
          <div className="w-8 h-8 border-emerald-50 border-8 rounded-full"></div>
        </div>
        <div className="flex flex-col items-center gap-4 w-full px-4">
          <div className="hover:cursor-pointer bg-opacity-50 flex items-center justify-center py-3 rounded-md bg-emerald-700 w-full relative before:rounded-r-md before:-left-7 before:-top-2 before:content-[''] before:h-12 before:w-1.5 before:bg-emerald-50 before:absolute">
            <FiEdit2 size="1.375rem" className="stroke-emerald-100" />
          </div>
          <div className="hover:bg-opacity-50 hover:bg-emerald-700 hover:cursor-pointer  flex items-center justify-center py-3 rounded-md w-full relative before:rounded-r-md before:-left-7 before:-top-2 before:content-[''] before:h-12 before:w-1.5 before:bg-emerald-50 before:absolute">
            <FiEye size="1.375rem" className="stroke-emerald-100" />
          </div>
          <div className="hover:bg-opacity-50 hover:bg-emerald-700 hover:cursor-pointer flex items-center justify-center py-3 rounded-md w-full relative before:rounded-r-md before:-left-7 before:-top-2 before:content-[''] before:h-12 before:w-1.5 before:bg-emerald-50 before:absolute">
            <FiDownload size="1.375rem" className="stroke-emerald-100" />
          </div>
          <div className="hover:bg-opacity-50 hover:bg-emerald-700 hover:cursor-pointer flex items-center justify-center py-3 rounded-md w-full relative before:rounded-r-md before:-left-7 before:-top-2 before:content-[''] before:h-12 before:w-1.5 before:bg-emerald-50 before:absolute">
            <FiXCircle size="1.375rem" className="stroke-emerald-100" />
          </div>
          <div className="bg-emerald-500 h-px w-8"></div>
          <div className="hover:bg-opacity-50 hover:bg-emerald-700 hover:cursor-pointer flex items-center justify-center py-3 rounded-md w-full relative before:rounded-r-md before:-left-7 before:-top-2 before:content-[''] before:h-12 before:w-1.5 before:bg-emerald-50 before:absolute">
            <VscColorMode size="1.375rem" className="fill-emerald-100" />
          </div>
        </div>
      </div>

      <div className="shadow-sm border-r bg-white pb-32 dark:bg-zinc-800 dark:border-zinc-700 w-full max-w-sm">
        <div className="border-b h-16 flex items-center px-8 text-lg font-semibold dark:text-zinc-200 dark:border-zinc-700">
          Notes{" "}
          <span className="text-sm text-zinc-400 font-normal ml-2">
            4 files
          </span>
        </div>
        <div className="w-full max-w-sm">
          <div className="border-b px-8 py-4 bg-zinc-50 dark:bg-zinc-700/25 dark:border-zinc-700">
            <h3 className="mb-2 font-medium flex items-center gap-2 justify-between dark:text-zinc-200">
              Note one
              <FiTrash2
                size="1.125rem"
                className="stroke-zinc-300 hover:stroke-rose-500 hover:cursor-pointer dark:stroke-zinc-500 dark:hover:stroke-rose-800"
              />
            </h3>
            <p className="overflow-hidden text-ellipsis max-h-16 text-sm text-zinc-500 dark:text-zinc-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias quas, neque dolore commodi perspiciatis magni.
            </p>
          </div>
          <div className="border-b px-8 py-4  dark:border-zinc-700">
            <h3 className="mb-2 font-medium flex items-center gap-2 justify-between dark:text-zinc-200">
              Note two
              <FiTrash2
                size="1.125rem"
                className="stroke-zinc-300 hover:stroke-rose-500 hover:cursor-pointer dark:stroke-zinc-500 dark:hover:stroke-rose-800"
              />
            </h3>
            <p className="overflow-hidden text-ellipsis max-h-16 text-sm text-zinc-500 dark:text-zinc-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias quas, neque dolore commodi perspiciatis magni.
            </p>
          </div>
          <div className="border-b px-8 py-4  dark:border-zinc-700">
            <h3 className="mb-2 font-medium flex items-center gap-2 justify-between dark:text-zinc-200">
              Note three
              <FiTrash2
                size="1.125rem"
                className="stroke-zinc-300 hover:stroke-rose-500 hover:cursor-pointer dark:stroke-zinc-500 dark:hover:stroke-rose-800"
              />
            </h3>
            <p className="overflow-hidden text-ellipsis max-h-16 text-sm text-zinc-500 dark:text-zinc-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias quas, neque dolore commodi perspiciatis magni.
            </p>
          </div>
          <div className="border-b px-8 py-4  dark:border-zinc-700">
            <h3 className="mb-2 font-medium flex items-center gap-2 justify-between dark:text-zinc-200">
              Note four
              <FiTrash2
                size="1.125rem"
                className="stroke-zinc-300 hover:stroke-rose-500 hover:cursor-pointer dark:stroke-zinc-500 dark:hover:stroke-rose-800"
              />
            </h3>
            <p className="overflow-hidden text-ellipsis max-h-16 text-sm text-zinc-500 dark:text-zinc-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias quas, neque dolore commodi perspiciatis magni.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="bg-white w-full border-b h-16 flex items-center justify-center px-8 text-lg font-semibold dark:text-zinc-200 dark:border-zinc-700 dark:bg-zinc-800">
          <div className="flex items-center justify-between  w-full max-w-5xl">
            <div>Note one</div>
            <FiSave className="dark:stroke-zinc-400 cursor-pointer hover:stroke-emerald-500 dark:hover:stroke-emerald-500" />
          </div>
        </div>

        <div className="h-full w-full max-w-5xl px-8 pt-8">
          <div className="shadow-lg bg-white h-full p-8 rounded-md dark:bg-zinc-800 dark:border-zinc-700">
            <h2 className="font-bold text-2xl mb-2 dark:text-zinc-200">
              <span className="text-zinc-300 dark:text-zinc-600">##</span> Note
              note
            </h2>
            <hr className="dark:border-zinc-700" />
            <p className="mt-4 dark:text-zinc-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias quas, neque dolore commodi perspiciatis magni. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Molestias
              quas, neque dolore commodi perspiciatis magni. Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Molestias quas, neque
              dolore commodi perspiciatis magni.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
