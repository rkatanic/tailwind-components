import {
  FiX,
  FiAlertTriangle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from "react-icons/fi";

const Alert = (): JSX.Element => (
  <div className="flex items-center flex-col gap-4 w-full">
    <div className="flex gap-4 shadow-md border-l-[3px] border-emerald-400 px-3 w-full max-w-md text-gray-700 dark:text-gray-100 dark:border-emerald-500 dark:bg-gray-800">
      <div className="flex items-baseline py-2">
        <FiCheckCircle
          size="1.5rem"
          className="stroke-emerald-500 dark:stroke-emerald-400"
        />
      </div>
      <div className="py-2 w-full flex items-start justify-between gap-2">
        Alert message text.
        <FiX size="1.5rem" className="cursor-pointer stroke-gray-400" />
      </div>
    </div>

    <div className="flex gap-4 shadow-md border-l-[3px] border-cyan-400 px-3 w-full max-w-md text-gray-700 dark:text-gray-100 dark:border-cyan-500 dark:bg-gray-800">
      <div className="flex items-baseline py-2">
        <FiCheckCircle
          size="1.5rem"
          className="stroke-cyan-500 dark:stroke-cyan-400"
        />
      </div>
      <div className="py-2 w-full flex items-start justify-between gap-2">
        Alert message text.
        <FiX size="1.5rem" className="cursor-pointer stroke-gray-400" />
      </div>
    </div>

    <div className="flex gap-4 shadow-md border-l-[3px] border-amber-400 px-3 w-full max-w-md text-gray-700 dark:text-gray-100 dark:border-amber-500 dark:bg-gray-800">
      <div className="flex items-baseline py-2">
        <FiCheckCircle
          size="1.5rem"
          className="stroke-amber-500 dark:stroke-amber-400"
        />
      </div>
      <div className="py-2 w-full flex items-start justify-between gap-2">
        Alert message text.
        <FiX size="1.5rem" className="cursor-pointer stroke-gray-400" />
      </div>
    </div>

    <div className="flex gap-4 shadow-md border-l-[3px] border-red-400 px-3 w-full max-w-md text-gray-700 dark:text-gray-100 dark:border-red-500 dark:bg-gray-800">
      <div className="flex items-baseline py-2">
        <FiCheckCircle
          size="1.5rem"
          className="stroke-red-500 dark:stroke-red-400"
        />
      </div>
      <div className="py-2 w-full flex items-start justify-between gap-2">
        Alert message text.
        <FiX size="1.5rem" className="cursor-pointer stroke-gray-400" />
      </div>
    </div>
  </div>
);

export default Alert;
