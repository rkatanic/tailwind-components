import { useState } from "react";
import {
  FiEdit2,
  FiEye,
  FiDownload,
  FiXCircle,
  FiTrash2,
  FiSave,
  FiFolder,
  FiX,
  FiMenu,
} from "react-icons/fi";
import { VscColorMode } from "react-icons/vsc";

const Sidenav = (): JSX.Element => {
  const [showMenu, setShowMenu] = useState(false);
  const [showFiles, setShowFiles] = useState(false);

  const handleShowMenuoggle = (): void => {
    setShowMenu((prevState) => !prevState);
  };

  const handleShowFilesToggle = (): void => {
    setShowFiles((prevState) => !prevState);
  };

  return (
    <div className="flex-col flex bg-gray-50 dark:bg-gray-800 dark:bg-opacity-40 sm:flex-row h-full">
      {(showMenu || showFiles) && (
        <div className="lg:hidden fixed inset-0 w-full h-full bg-gray-800/70 z-100"></div>
      )}
      <div className="w-full sm:max-w-[5rem] bg-gradient-to-b from-cyan-600 to-cyan-600 flex flex-col items-center gap-6 sm:z-10">
        <div className="px-8 justify-between flex items-center sm:justify-center sm:px-0 h-16 bg-cyan-700 w-full z-10">
          <div className="w-8 h-8 border-cyan-50 border-8 rounded-full"></div>
          {showMenu ? (
            <FiX
              onClick={handleShowMenuoggle}
              size="1.375rem"
              className="stroke-white sm:hidden"
            />
          ) : (
            <FiMenu
              onClick={handleShowMenuoggle}
              size="1.375rem"
              className="stroke-white sm:hidden"
            />
          )}
        </div>
        <div
          className={`${
            showMenu ? "top-0" : "-top-full"
          } z-0 transition-[top] duration-300 absolute sm:relative sm:mt-0 sm:py-0 sm:top-0 mt-16 py-4 bg-gradient-to-b from-cyan-600 to-cyan-600  flex flex-col items-center gap-4 w-full px-3`}
        >
          <div className="hover:cursor-pointer bg-opacity-50 flex gap-4 items-center justify-center py-3 rounded bg-cyan-700 w-full">
            <FiEdit2 size="1.375rem" className="stroke-cyan-100" />
            <span className="text-white text-lg sm:hidden">Editor</span>
          </div>
          <div className="hover:bg-opacity-50 hover:bg-cyan-700 hover:cursor-pointer  flex gap-4 items-center justify-center py-3 rounded w-full">
            <FiEye size="1.375rem" className="stroke-cyan-100" />
            <span className="text-white text-lg sm:hidden">Preview</span>
          </div>
          <div className="hover:bg-opacity-50 hover:bg-cyan-700 hover:cursor-pointer flex gap-4 items-center justify-center py-3 rounded w-full">
            <FiDownload size="1.375rem" className="stroke-cyan-100" />
            <span className="text-white text-lg sm:hidden">Download</span>
          </div>
          <div className="hover:bg-opacity-50 hover:bg-cyan-700 hover:cursor-pointer flex gap-4 items-center justify-center py-3 rounded w-full">
            <FiXCircle size="1.375rem" className="stroke-cyan-100" />
            <span className="text-white text-lg sm:hidden">Clear</span>
          </div>
          <div
            onClick={handleShowFilesToggle}
            className="lg:hidden hover:bg-opacity-50 hover:bg-cyan-700 hover:cursor-pointer flex gap-4 items-center justify-center py-3 rounded w-full"
          >
            <FiFolder size="1.375rem" className="stroke-cyan-100" />
            <span className="text-white text-lg sm:hidden">Files</span>
          </div>
          <div className="bg-cyan-500 h-px w-8"></div>
          <div className="hover:bg-opacity-50 hover:bg-cyan-700 hover:cursor-pointer flex gap-4 items-center justify-center py-3 rounded w-full">
            <VscColorMode size="1.375rem" className="fill-cyan-100" />
            <span className="text-white text-lg sm:hidden">Theme</span>
          </div>
        </div>
      </div>

      <div
        className={`${
          showFiles ? "left-0 sm:ml-20" : ""
        } z-10 h-full transition-[left] duration-300 absolute -left-full lg:relative lg:left-0 lg:ml-0 shadow-sm border-r bg-white dark:bg-gray-700 dark:border-gray-600 w-full max-w-sm  pb-32`}
      >
        <div className="border-b h-16 flex items-center justify-between px-3 text-lg font-semibold dark:text-gray-200 dark:border-gray-600">
          <div>
            Notes{" "}
            <span className="text-sm text-gray-400 font-normal ml-1">
              4 files
            </span>
          </div>
          <FiX onClick={handleShowFilesToggle} className="lg:hidden" />
        </div>
        <div className="w-full max-w-sm">
          <div className="border-b p-4 bg-gray-50 dark:bg-gray-600/70 dark:border-gray-600">
            <h3 className="mb-1 font-medium flex items-center gap-2 justify-between dark:text-gray-200">
              Note one
              <FiTrash2
                size="1.125rem"
                className="stroke-gray-300 hover:stroke-red-500 hover:cursor-pointer dark:stroke-gray-400 dark:hover:stroke-red-600"
              />
            </h3>
            <p className="overflow-hidden text-ellipsis max-h-16 text-sm text-gray-400 dark:text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias quas, neque dolore commodi perspiciatis magni.
            </p>
          </div>
          <div className="border-b p-4 dark:border-gray-600">
            <h3 className="mb-1 font-medium flex items-center gap-2 justify-between dark:text-gray-200">
              Note two
              <FiTrash2
                size="1.125rem"
                className="stroke-gray-300 hover:stroke-red-500 hover:cursor-pointer dark:stroke-gray-400 dark:hover:stroke-red-600"
              />
            </h3>
            <p className="overflow-hidden text-ellipsis max-h-16 text-sm text-gray-400 dark:text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias quas, neque dolore commodi perspiciatis magni.
            </p>
          </div>
          <div className="border-b p-4 dark:border-gray-600">
            <h3 className="mb-1 font-medium flex items-center gap-2 justify-between dark:text-gray-200">
              Note three
              <FiTrash2
                size="1.125rem"
                className="stroke-gray-300 hover:stroke-red-500 hover:cursor-pointer dark:stroke-gray-400 dark:hover:stroke-red-600"
              />
            </h3>
            <p className="overflow-hidden text-ellipsis max-h-16 text-sm text-gray-400 dark:text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias quas, neque dolore commodi perspiciatis magni.
            </p>
          </div>
          <div className="border-b p-4 dark:border-gray-600">
            <h3 className="mb-1 font-medium flex items-center gap-2 justify-between dark:text-gray-200">
              Note four
              <FiTrash2
                size="1.125rem"
                className="stroke-gray-300 hover:stroke-red-500 hover:cursor-pointer dark:stroke-gray-400 dark:hover:stroke-red-600"
              />
            </h3>
            <p className="overflow-hidden text-ellipsis max-h-16 text-sm text-gray-400 dark:text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias quas, neque dolore commodi perspiciatis magni.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="bg-white w-full border-b h-16 flex items-center justify-center text-lg font-semibold dark:text-gray-200 dark:border-gray-600 dark:bg-gray-700">
          <div className="flex items-center justify-between w-full max-w-5xl px-8 ">
            <div>Note one</div>
            <FiSave className="dark:stroke-gray-400 cursor-pointer hover:stroke-cyan-500 dark:hover:stroke-cyan-400" />
          </div>
        </div>

        <div className="h-full w-full max-w-5xl m-auto mt-8 px-8">
          <div className="shadow-lg bg-white h-full p-8 rounded dark:bg-gray-700 dark:border-gray-600">
            <h2 className="font-bold text-2xl mb-2 dark:text-gray-100">
              <span className="text-gray-300 dark:text-gray-400">##</span> Note
              note
            </h2>
            <hr className="dark:border-gray-600" />
            <p className="mt-4 dark:text-gray-200">
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
