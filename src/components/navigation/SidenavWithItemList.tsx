import { FiXCircle } from "react-icons/fi";

const SidenavWithItemList = (): JSX.Element => (
  <div className="w-full max-w-xs border-r-2 dark:border-gray-800 pb-16">
    <div className="px-6 py-6 text-lg font-semibold dark:text-gray-100">
      Notes{" "}
      <span className="inline-block ml-2 text-xs font-medium text-gray-400">
        4 files
      </span>
    </div>

    <div className="dark:border-gray-800 px-6 py-4 bg-cyan-500">
      <div className="text-white text-md font-medium">
        Note one{" "}
        <FiXCircle
          size="1rem"
          className="cursor-pointer ml-2 float-right stroke-white"
        />
      </div>
      <div className="overflow-hidden text-ellipsis h-8 text-xs text-white">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, labore
        pariatur. Aliquam, accusantium blanditiis iusto quis, eaque tempora nisi
        dicta.
      </div>
    </div>

    <div className="dark:border-gray-800 px-6 py-4 dark:hover:bg-gray-900 hover:bg-gray-50">
      <div className="dark:text-gray-300 text-gray-400 text-md font-medium">
        Note two{" "}
        <FiXCircle
          size="1rem"
          className="cursor-pointer ml-2 float-right stroke-gray-300 dark:stroke-gray-400 hover:stroke-cyan-500 dark:hover:stroke-cyan-500"
        />
      </div>
      <div className="overflow-hidden text-ellipsis h-8 text-gray-400 dark:text-gray-400 text-xs">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, labore
        pariatur. Aliquam, accusantium blanditiis iusto quis, eaque tempora nisi
        dicta.
      </div>
    </div>

    <div className="dark:border-gray-800 px-6 py-4 dark:hover:bg-gray-900 hover:bg-gray-50">
      <div className="dark:text-gray-300 text-gray-400 text-md font-medium">
        Note three{" "}
        <FiXCircle
          size="1rem"
          className="cursor-pointer ml-2 float-right stroke-gray-300 dark:stroke-gray-400 hover:stroke-cyan-500 dark:hover:stroke-cyan-500"
        />
      </div>
      <div className="overflow-hidden text-ellipsis h-8 text-gray-400 dark:text-gray-400 text-xs">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, labore
        pariatur. Aliquam, accusantium blanditiis iusto quis, eaque tempora nisi
        dicta.
      </div>
    </div>

    <div className="dark:border-gray-800 px-6 py-4 dark:hover:bg-gray-900 hover:bg-gray-50">
      <div className="dark:text-gray-300 text-gray-400 text-md font-medium">
        Note four{" "}
        <FiXCircle
          size="1rem"
          className="cursor-pointer ml-2 float-right stroke-gray-300 dark:stroke-gray-400 hover:stroke-cyan-500 dark:hover:stroke-cyan-500"
        />
      </div>
      <div className="overflow-hidden text-ellipsis h-8 text-gray-400 dark:text-gray-400 text-xs">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, labore
        pariatur. Aliquam, accusantium blanditiis iusto quis, eaque tempora nisi
        dicta.
      </div>
    </div>
  </div>
);
export default SidenavWithItemList;
