import {
  FiX,
  FiAlertTriangle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from "react-icons/fi";

const Alert = (): JSX.Element => (
  <div className="flex items-center flex-col gap-4 w-full">
    <div className="flex gap-4 shadow-sm rounded-md border text-teal-600 border-teal-400 bg-teal-100 px-4 w-full max-w-md dark:text-teal-300 dark:border-teal-600 dark:bg-teal-900/50">
      <div className="flex items-center py-2 pr-4 border-r border-teal-400 dark:border-teal-600">
        <FiCheckCircle
          size="1.5rem"
          className="stroke-teal-500 dark:stroke-teal-300"
        />
      </div>
      <div className="py-2 w-full flex items-start justify-between gap-2 dark:font-extralight">
        Success alert message text.
        <FiX
          size="1.5rem"
          className="cursor-pointer stroke-teal-500 dark:stroke-teal-300"
        />
      </div>
    </div>

    <div className="flex gap-4 shadow-sm rounded-md border text-sky-600 border-sky-400 bg-sky-100 px-4 w-full max-w-md dark:text-sky-300 dark:border-sky-600 dark:bg-sky-900/50">
      <div className="flex items-center py-2 pr-4 border-r border-sky-400 dark:border-sky-600">
        <FiInfo size="1.5rem" className="stroke-sky-500 dark:stroke-sky-300" />
      </div>
      <div className="py-2  w-full flex items-start justify-between gap-2 dark:font-extralight">
        Info alert message text.
        <FiX
          size="1.5rem"
          className="cursor-pointer stroke-sky-500 dark:stroke-sky-300"
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
