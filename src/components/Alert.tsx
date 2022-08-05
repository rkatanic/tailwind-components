import {
  FiX,
  FiAlertTriangle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from "react-icons/fi";

const Alert = (): JSX.Element => (
  <div className="flex items-center flex-col gap-4 w-full">
    <div className="flex gap-4 shadow-sm rounded-md border text-teal-600 border-teal-400 bg-teal-100 px-4 w-full max-w-md">
      <div className="flex items-center py-2 pr-4 border-r border-teal-400">
        <FiCheckCircle size="1.5rem" className="stroke-teal-500" />
      </div>
      <div className="py-2  w-full flex items-start justify-between gap-2">
        Success alert message text.
        <FiX size="1.5rem" className="cursor-pointer stroke-teal-500" />
      </div>
    </div>

    <div className="flex gap-4 shadow-sm rounded-md border text-sky-600 border-sky-400 bg-sky-100 px-4 w-full max-w-md">
      <div className="flex items-center py-2 pr-4 border-r border-sky-400">
        <FiInfo size="1.5rem" className="stroke-sky-500" />
      </div>
      <div className="py-2  w-full flex items-start justify-between gap-2">
        Info alert message text.
        <FiX size="1.5rem" className="cursor-pointer stroke-sky-500" />
      </div>
    </div>

    <div className="flex gap-4 shadow-sm rounded-md border text-amber-600 border-amber-400 bg-amber-100 px-4 w-full max-w-md">
      <div className="flex items-center py-2 pr-4 border-r border-amber-400">
        <FiAlertTriangle size="1.5rem" className="stroke-amber-500" />
      </div>
      <div className="py-2  w-full flex items-start justify-between gap-2">
        Warning alert message text.
        <FiX size="1.5rem" className="cursor-pointer stroke-amber-500" />
      </div>
    </div>

    <div className="flex gap-4 shadow-sm rounded-md border text-rose-600 border-rose-400 bg-rose-100 px-4 w-full max-w-md">
      <div className="flex items-center py-2 pr-4 border-r border-rose-400">
        <FiXCircle size="1.5rem" className="stroke-rose-500" />
      </div>
      <div className="py-2  w-full flex items-start justify-between gap-2">
        Error alert message text.
        <FiX size="1.5rem" className="cursor-pointer stroke-rose-500" />
      </div>
    </div>
  </div>
);

export default Alert;
