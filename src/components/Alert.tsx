import {
  FiX,
  FiAlertTriangle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from "react-icons/fi";

const Alert = (): JSX.Element => (
  <div className="flex items-center flex-col gap-4 w-full">
    <div className="flex gap-4 shadow-sm rounded-md border text-emerald-600 border-emerald-400 bg-emerald-100 px-4 w-full max-w-md dark:text-emerald-300 dark:border-emerald-600 dark:bg-emerald-900/50">
      <div className="flex items-center py-2 pr-4 border-r border-emerald-400 dark:border-emerald-600">
        <FiCheckCircle
          size="1.5rem"
          className="stroke-emerald-500 dark:stroke-emerald-300"
        />
      </div>
      <div className="py-2 w-full flex items-start justify-between gap-2 dark:font-extralight">
        Success alert message text.
        <FiX
          size="1.5rem"
          className="cursor-pointer stroke-emerald-500 dark:stroke-emerald-300"
        />
      </div>
    </div>

    <div className="flex gap-4 shadow-sm rounded-md border text-cyan-600 border-cyan-400 bg-cyan-100 px-4 w-full max-w-md dark:text-cyan-300 dark:border-cyan-600 dark:bg-cyan-900/50">
      <div className="flex items-center py-2 pr-4 border-r border-cyan-400 dark:border-cyan-600">
        <FiInfo
          size="1.5rem"
          className="stroke-cyan-500 dark:stroke-cyan-300"
        />
      </div>
      <div className="py-2  w-full flex items-start justify-between gap-2 dark:font-extralight">
        Info alert message text.
        <FiX
          size="1.5rem"
          className="cursor-pointer stroke-cyan-500 dark:stroke-cyan-300"
        />
      </div>
    </div>

    <div className="flex gap-4 shadow-sm rounded-md border text-amber-600 border-amber-400 bg-amber-100 px-4 w-full max-w-md  dark:text-amber-300 dark:border-amber-600 dark:bg-amber-900/50">
      <div className="flex items-center py-2 pr-4 border-r border-amber-400 dark:border-amber-600">
        <FiAlertTriangle
          size="1.5rem"
          className="stroke-amber-500 dark:stroke-amber-300"
        />
      </div>
      <div className="py-2  w-full flex items-start justify-between gap-2  dark:font-extralight">
        Warning alert message text.
        <FiX
          size="1.5rem"
          className="cursor-pointer stroke-amber-500 dark:stroke-amber-300"
        />
      </div>
    </div>

    <div className="flex gap-4 shadow-sm rounded-md border text-rose-600 border-rose-400 bg-rose-100 px-4 w-full max-w-md  dark:text-rose-300 dark:border-rose-600 dark:bg-rose-900/50">
      <div className="flex items-center py-2 pr-4 border-r border-rose-400 dark:border-rose-600">
        <FiXCircle
          size="1.5rem"
          className="stroke-rose-500 dark:stroke-rose-300"
        />
      </div>
      <div className="py-2  w-full flex items-start justify-between gap-2 dark:font-extralight">
        Error alert message text.
        <FiX
          size="1.5rem"
          className="cursor-pointer stroke-rose-500 dark:stroke-rose-300"
        />
      </div>
    </div>
  </div>
);

export default Alert;
