import { FiHome, FiList, FiLogOut } from "react-icons/fi";

const SidenavV2 = (): JSX.Element => (
  <div className="p-4 w-full max-w-xs bg-gray-100 border-r flex flex-col justify-between gap-8 dark:bg-gray-700 dark:border-gray-600">
    <div className="flex flex-col gap-8">
      <div className="flex gap-4 items-center">
        <div className="w-8 h-8 rounded-full border-8 border-cyan-400"></div>
        <span className="text-2xl font-black text-gray-600 dark:text-gray-200">
          DimeFlow
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-400 font-semibold tracking-wider dark:text-gray-400">
          PAGES
        </span>
        <p className="bg-gray-200 font-semibold text-gray-600 rounded p-2 flex gap-4 items-center hover:bg-gray-200 cursor-pointer dark:hover:bg-gray-600 dark:bg-gray-600 dark:text-gray-200">
          <FiHome
            size="1.25rem"
            className="stroke-gray-600 dark:stroke-gray-200"
          />
          Overview
        </p>
        <p className="flex gap-4 items-center font-semibold text-gray-600 rounded p-2 hover:bg-gray-200 cursor-pointer dark:hover:bg-gray-600 dark:text-gray-300">
          <FiList
            size="1.25rem"
            className="stroke-gray-600 dark:stroke-gray-300"
          />
          Transactions
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-400 font-semibold tracking-wider dark:text-gray-400">
          SETTINGS
        </span>
        <label
          htmlFor="theme-switch"
          className="inline-flex relative items-center cursor-pointer mt-2"
        >
          <input
            type="checkbox"
            value=""
            id="theme-switch"
            className="sr-only peer"
          />
          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 rounded-full peer dark:bg-gray-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-cyan-500"></div>
          <span className="ml-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
            Dark mode
          </span>
        </label>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-xs text-gray-400 font-semibold tracking-wider dark:text-gray-400">
          CATEGORIES
        </span>

        <p className="font-semibold text-gray-600 text-sm flex gap-4 items-center dark:text-gray-300">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-500"></div>
          Income
        </p>
        <p className="font-semibold text-gray-600 text-sm flex gap-4 items-center dark:text-gray-300">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-500"></div>
          Food & Drinks
        </p>
        <p className="font-semibold text-gray-600 text-sm flex gap-4 items-center dark:text-gray-300">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-500"></div>
          Electricity
        </p>
        <p className="font-semibold text-gray-600 text-sm flex gap-4 items-center dark:text-gray-300">
          <div className="w-2.5 h-2.5 rounded-full bg-lime-500"></div>
          Medicine
        </p>
        <p className="font-semibold text-gray-600 text-sm flex gap-4 items-center dark:text-gray-300">
          <div className="w-2.5 h-2.5 rounded-full bg-pink-500"></div>
          Internet
        </p>
        <p className="font-semibold text-gray-600 text-sm flex gap-4 items-center dark:text-gray-300">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
          Telephone
        </p>
        <p className="font-semibold text-gray-600 text-sm flex gap-4 items-center dark:text-gray-300">
          <div className="w-2.5 h-2.5 rounded-full bg-orange-400"></div>
          Housing
        </p>
        <p className="font-semibold text-gray-600 text-sm flex gap-4 items-center dark:text-gray-300">
          <div className="w-2.5 h-2.5 rounded-full bg-gray-700 dark:bg-white"></div>
          Fuel
        </p>
        <p className="font-semibold text-gray-600 text-sm flex gap-4 items-center dark:text-gray-300">
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
          Tech
        </p>
        <p className="font-semibold text-gray-600 text-sm flex gap-4 items-center dark:text-gray-300">
          <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
          Other
        </p>
      </div>
    </div>

    <div className="flex flex-col gap-2">
      <span className="text-xs text-gray-400 font-semibold tracking-wider dark:text-gray-400">
        ACTIONS
      </span>
      <p className="flex gap-4 items-center text-sm font-semibold text-gray-600 rounded p-2 hover:bg-gray-200 cursor-pointer dark:hover:bg-gray-600 dark:text-gray-300">
        <FiLogOut
          size="1.25rem"
          className="stroke-gray-600 dark:stroke-gray-300"
        />
        Sign out
      </p>
    </div>
  </div>
);

export default SidenavV2;
