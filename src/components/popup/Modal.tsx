import { FiX, FiAlertTriangle } from "react-icons/fi";

const Modal = (): JSX.Element => (
  <>
    <div className="absolute inset-0 bg-gray-100 dark:bg-black"></div>
    <div className="relative bg-white shadow-lg p-4 rounded w-full max-w-lg dark:bg-gray-800">
      <div className="flex flex-col justify-center items-center  gap-4 mb-8 sm:flex-row sm:items-start">
        <div className="p-3 bg-red-100 rounded-full dark:bg-red-900 dark:bg-opacity-30">
          <FiAlertTriangle size="1.5rem" className="stroke-red-500" />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h5 className="flex items-start justify-center font-semibold sm:justify-between dark:text-gray-100">
            Delete transaction
            <FiX
              size="1.5rem"
              className="hidden stroke-gray-400 cursor-pointer sm:block"
            />
          </h5>
          <p className="text-gray-500 text-md dark:text-gray-400">
            Are you sure you want to delete this transaction? <br /> This action
            can not be undone.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-end sm:flex-row">
        <button
          type="button"
          className="shadow-sm font-medium text-sm py-2 px-6 rounded-md dark:shadow-md border bg-white hover:bg-gray-50 text-gray-700 dark:border-gray-600 dark:bg-transparent dark:text-gray-100 dark:hover:bg-gray-700"
        >
          Cancel
        </button>
        <button
          type="button"
          className="shadow-sm font-medium text-sm py-2 px-6 rounded-md dark:shadow-md border bg-white border-red-400 hover:bg-red-500 hover:text-white text-red-600 dark:bg-transparent dark:text-red-400 dark:hover:bg-red-500 dark:hover:text-white dark:hover:border-red-500"
        >
          Delete
        </button>
      </div>
    </div>
  </>
);

export default Modal;
