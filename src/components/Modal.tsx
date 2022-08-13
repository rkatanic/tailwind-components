import { FiX, FiAlertTriangle } from "react-icons/fi";

const Modal = (): JSX.Element => (
  <>
    <div className="absolute inset-0 bg-gray-100 dark:bg-gray-900"></div>
    <div className="relative bg-white shadow-lg p-6 rounded-md w-full max-w-lg dark:bg-gray-800">
      <div className="flex flex-col justify-center items-center  gap-4 mb-8 sm:flex-row sm:items-start">
        <div className="p-3 bg-rose-100 rounded-full dark:bg-rose-900 dark:bg-opacity-30">
          <FiAlertTriangle size="1.5rem" className="stroke-rose-500" />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h2 className="flex items-start justify-center font-semibold text-lg mb-2 sm:justify-between dark:text-gray-100">
            Delete transaction
            <FiX
              size="1.5rem"
              className="hidden stroke-gray-400 cursor-pointer sm:block"
            />
          </h2>
          <p className="text-gray-500 text-md dark:text-gray-400">
            Are you sure you want to delete this transaction? <br /> This action
            can not be undone.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-end sm:flex-row">
        <button className="order-2 shadow-sm font-semibold text-sm border border-gray-300 px-4 py-2 rounded-md text-gray-900 hover:bg-gray-50 sm:order-1 dark:shadow-md dark:text-gray-100 dark:hover:bg-gray-700 dark:border-gray-500">
          Cancel
        </button>
        <button className="order-1 shadow-sm font-semibold text-sm border border-rose-700 bg-rose-600 px-4 py-2 rounded-md text-white hover:bg-rose-500 hover:border-rose-700 dark:shadow-md dark:bg-rose-800 dark:hover:bg-rose-700">
          Delete
        </button>
      </div>
    </div>
  </>
);

export default Modal;
