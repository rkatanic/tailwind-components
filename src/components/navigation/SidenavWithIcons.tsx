import {
  RiQuillPenFill,
  RiEyeFill,
  RiDownloadCloud2Fill,
  RiCloseCircleFill,
} from "react-icons/ri";
import { VscColorMode } from "react-icons/vsc";

const SidenavWithIcons = (): JSX.Element => (
  <div className="flex flex-col items-center gap-10 py-8 w-20 border-r-2 h-[42rem] dark:border-gray-800 bg-white dark:bg-black">
    <div className="h-8 w-8 border-8 border-cyan-500 rounded-full mb-4"></div>
    <div className="flex justify-center relative before:absolute before:w-[2px] before:right-[-2px] before:rounded before:-top-5 w-full before:bg-cyan-500 before:h-14">
      <RiQuillPenFill
        size="1.25rem"
        className=" fill-cyan-600 dark:fill-cyan-500"
      />
    </div>
    <div className="flex justify-center relative before:absolute before:w-[2px] before:right-[-2px] before:rounded before:-top-1/2 w-full before:h-24">
      <RiEyeFill
        size="1.25rem"
        className="cursor-pointer hover:fill-cyan-600 dark:hover:fill-cyan-500 fill-gray-300 dark:fill-gray-400"
      />
    </div>
    <RiDownloadCloud2Fill
      size="1.25rem"
      className="cursor-pointer hover:fill-cyan-600 dark:hover:fill-cyan-500 fill-gray-300 dark:fill-gray-400"
    />
    <RiCloseCircleFill
      size="1.25rem"
      className="cursor-pointer hover:fill-cyan-600 dark:hover:fill-cyan-500 fill-gray-300 dark:fill-gray-400"
    />
    <VscColorMode
      size="1.25rem"
      className="cursor-pointer hover:fill-cyan-600 dark:hover:fill-cyan-500 fill-gray-300 dark:fill-gray-400"
    />
  </div>
);

export default SidenavWithIcons;
