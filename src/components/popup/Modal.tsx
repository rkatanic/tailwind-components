import { FiX, FiAlertTriangle } from "react-icons/fi";

const Modal = (): JSX.Element => (
  <>
    <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-900"></div>
    <div className="relative bg-white shadow-lg p-4 rounded-md w-full max-w-lg dark:bg-zinc-700">
      <div className="flex flex-col justify-center items-center  gap-4 mb-8 sm:flex-row sm:items-start">
        <div className="p-3 bg-red-100 rounded-full dark:bg-red-900 dark:bg-opacity-30">
          <FiAlertTriangle size="1.5rem" className="stroke-red-500" />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h5 className="flex items-start justify-center font-semibold sm:justify-between dark:text-zinc-100">
            Delete transaction
            <FiX
              size="1.5rem"
              className="hidden stroke-zinc-400 cursor-pointer sm:block"
            />
          </h5>
          <p className="text-zinc-500 text-md dark:text-zinc-400">
            Are you sure you want to delete this transaction? <br /> This action
            can not be undone.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-end sm:flex-row">
        <button
          type="button"
          className="shadow-sm font-semibold text-sm border py-1.5 px-4 rounded-md dark:shadow-md border-zinc-300 bg-zinc-50 hover:bg-zinc-100 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-300 dark:border-zinc-500 dark:hover:bg-zinc-600 dark:hover:border-zinc-500 dark:hover:text-zinc-100"
        >
          Cancel
        </button>
        <button
          type="button"
          className="order-1 shadow-sm font-semibold text-sm border py-1.5 px-4 rounded-md dark:shadow-md bg-red-600 border-red-700 text-white hover:bg-red-500 hover:border-red-600 dark:bg-red-600 dark:hover:bg-red-500 dark:hover:border-red-400 dark:border-red-500"
        >
          Delete
        </button>
      </div>
    </div>
  </>
);

export default Modal;
