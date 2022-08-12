import {
  FiEdit2,
  FiEye,
  FiDownload,
  FiXCircle,
  FiTrash2,
} from "react-icons/fi";

const Sidenav = (): JSX.Element => {
  return (
    <div className="flex bg-gray-50 dark:bg-zinc-900 dark:bg-opacity-40">
      <div className="w-20 bg-teal-600 flex flex-col items-center gap-12">
        <div className="flex items-center justify-center h-16 bg-teal-700 w-full">
          logo
        </div>
        <div className="flex flex-col items-center gap-4 w-full px-4">
          <div className="hover:cursor-pointer bg-opacity-50 flex items-center justify-center py-3 rounded-md bg-teal-700 w-full relative before:rounded-r-md before:-left-7 before:-top-2 before:content-[''] before:h-12 before:w-1.5 before:bg-teal-50 before:absolute">
            <FiEdit2 size="1.5rem" className="stroke-teal-100" />
          </div>
          <div className="hover:bg-opacity-50 hover:bg-teal-700 hover:cursor-pointer  flex items-center justify-center py-3 rounded-md w-full relative before:rounded-r-md before:-left-7 before:-top-2 before:content-[''] before:h-12 before:w-1.5 before:bg-teal-50 before:absolute">
            <FiEye size="1.5rem" className="stroke-teal-100" />
          </div>
          <div className="hover:bg-opacity-50 hover:bg-teal-700 hover:cursor-pointer flex items-center justify-center py-3 rounded-md w-full relative before:rounded-r-md before:-left-7 before:-top-2 before:content-[''] before:h-12 before:w-1.5 before:bg-teal-50 before:absolute">
            <FiDownload size="1.5rem" className="stroke-teal-100" />
          </div>
          <div className="hover:bg-opacity-50 hover:bg-teal-700 hover:cursor-pointer flex items-center justify-center py-3 rounded-md w-full relative before:rounded-r-md before:-left-7 before:-top-2 before:content-[''] before:h-12 before:w-1.5 before:bg-teal-50 before:absolute">
            <FiXCircle size="1.5rem" className="stroke-teal-100" />
          </div>
        </div>
      </div>

      <div className="shadow-sm border-r bg-white pb-32 dark:bg-zinc-800 dark:border-zinc-700/50">
        <div className="border-b h-16 flex items-center px-8 text-lg font-semibold dark:text-zinc-200 dark:border-zinc-700/50">
          Notes
        </div>
        <div className="w-full max-w-sm">
          <div className="border-b px-8 py-4 bg-gray-50 dark:bg-zinc-700/25 dark:border-zinc-700">
            <h3 className="mb-2 font-medium flex items-center gap-2 justify-between dark:text-zinc-200">
              Note one
              <FiTrash2
                size="1.125rem"
                className="stroke-gray-300 hover:stroke-rose-500 hover:cursor-pointer dark:stroke-zinc-500 dark:hover:stroke-rose-600"
              />
            </h3>
            <p className="overflow-hidden text-ellipsis max-h-16 text-sm text-gray-500 dark:text-zinc-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias quas, neque dolore commodi perspiciatis magni.
            </p>
          </div>
          <div className="border-b px-8 py-4  dark:border-zinc-700/50">
            <h3 className="mb-2 font-medium flex items-center gap-2 justify-between dark:text-zinc-200">
              Note two
              <FiTrash2
                size="1.125rem"
                className="stroke-gray-300 hover:stroke-rose-500 hover:cursor-pointer dark:stroke-zinc-500 dark:hover:stroke-rose-600"
              />
            </h3>
            <p className="overflow-hidden text-ellipsis max-h-16 text-sm text-gray-500 dark:text-zinc-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias quas, neque dolore commodi perspiciatis magni.
            </p>
          </div>
          <div className="border-b px-8 py-4  dark:border-zinc-700/50">
            <h3 className="mb-2 font-medium flex items-center gap-2 justify-between dark:text-zinc-200">
              Note three
              <FiTrash2
                size="1.125rem"
                className="stroke-gray-300 hover:stroke-rose-500 hover:cursor-pointer dark:stroke-zinc-500 dark:hover:stroke-rose-600"
              />
            </h3>
            <p className="overflow-hidden text-ellipsis max-h-16 text-sm text-gray-500 dark:text-zinc-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias quas, neque dolore commodi perspiciatis magni.
            </p>
          </div>
          <div className="border-b px-8 py-4  dark:border-zinc-700/50">
            <h3 className="mb-2 font-medium flex items-center gap-2 justify-between dark:text-zinc-200">
              Note four
              <FiTrash2
                size="1.125rem"
                className="stroke-gray-300 hover:stroke-rose-500 hover:cursor-pointer dark:stroke-zinc-500 dark:hover:stroke-rose-600"
              />
            </h3>
            <p className="overflow-hidden text-ellipsis max-h-16 text-sm text-gray-500 dark:text-zinc-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias quas, neque dolore commodi perspiciatis magni.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
