import { TiDelete } from "react-icons/ti";

const SidenavWithItemList = (): JSX.Element => (
  <div className="w-full max-w-xs border-r-2 dark:border-zinc-800 pb-16">
    <div className="px-6 py-8 text-lg font-semibold dark:text-zinc-100">
      Notes{" "}
      <span className="inline-block ml-2 text-xs font-medium dark:text-zinc-400">
        4 files
      </span>
    </div>

    <div className=" dark:border-zinc-800 px-6 py-4 dark:bg-zinc-900 bg-zinc-50">
      <div className="dark:text-zinc-100 text-md font-medium">
        Note one{" "}
        <TiDelete
          size="1.25rem"
          className="cursor-pointer ml-2 float-right fill-zinc-300 dark:fill-zinc-400 hover:fill-cyan-600 dark:hover:fill-cyan-500"
        />
      </div>
      <div className="overflow-hidden text-ellipsis h-8 text-zinc-400 dark:text-zinc-400 text-xs">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, labore
        pariatur. Aliquam, accusantium blanditiis iusto quis, eaque tempora nisi
        dicta.
      </div>
    </div>

    <div className=" dark:border-zinc-800 px-6 py-4 dark:hover:bg-zinc-900 hover:bg-zinc-50">
      <div className="dark:text-zinc-300 text-zinc-400 text-md font-medium">
        Note two{" "}
        <TiDelete
          size="1.25rem"
          className="cursor-pointer ml-2 float-right fill-zinc-300 dark:fill-zinc-400 hover:fill-cyan-600 dark:hover:fill-cyan-500"
        />
      </div>
      <div className="overflow-hidden text-ellipsis h-8 text-zinc-400 dark:text-zinc-400 text-xs">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, labore
        pariatur. Aliquam, accusantium blanditiis iusto quis, eaque tempora nisi
        dicta.
      </div>
    </div>

    <div className=" dark:border-zinc-800 px-6 py-4 dark:hover:bg-zinc-900 hover:bg-zinc-50">
      <div className="dark:text-zinc-300 text-zinc-400 text-md font-medium">
        Note three{" "}
        <TiDelete
          size="1.25rem"
          className="cursor-pointer ml-2 float-right fill-zinc-300 dark:fill-zinc-400 hover:fill-cyan-600 dark:hover:fill-cyan-500"
        />
      </div>
      <div className="overflow-hidden text-ellipsis h-8 text-zinc-400 dark:text-zinc-400 text-xs">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, labore
        pariatur. Aliquam, accusantium blanditiis iusto quis, eaque tempora nisi
        dicta.
      </div>
    </div>

    <div className=" dark:border-zinc-800 px-6 py-4 dark:hover:bg-zinc-900 hover:bg-zinc-50">
      <div className="dark:text-zinc-300 text-zinc-400 text-md font-medium">
        Note four{" "}
        <TiDelete
          size="1.25rem"
          className="cursor-pointer ml-2 float-right fill-zinc-300 dark:fill-zinc-400 hover:fill-cyan-600 dark:hover:fill-cyan-500"
        />
      </div>
      <div className="overflow-hidden text-ellipsis h-8 text-zinc-400 dark:text-zinc-400 text-xs">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, labore
        pariatur. Aliquam, accusantium blanditiis iusto quis, eaque tempora nisi
        dicta.
      </div>
    </div>
  </div>
);
export default SidenavWithItemList;
