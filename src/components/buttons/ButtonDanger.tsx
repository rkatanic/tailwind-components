const ButtonPrimary = () => {
  return (
    <div className="flex items-end gap-4">
      <button
        type="button"
        className="shadow-sm font-medium text-sm py-2 px-6 rounded-md dark:shadow-md border bg-white border-red-400 hover:bg-red-500 hover:text-white text-red-600 dark:bg-black dark:text-red-400 dark:hover:bg-red-500 dark:hover:text-white dark:hover:border-red-500"
      >
        Button
      </button>

      <button
        type="button"
        className="shadow-sm font-medium text-md py-2 px-6 rounded-md dark:shadow-md border bg-white border-red-400 hover:bg-red-500 hover:text-white text-red-600 dark:bg-black dark:text-red-400 dark:hover:bg-red-500 dark:hover:text-white dark:hover:border-red-500"
      >
        Button
      </button>

      <button
        type="button"
        className="shadow-sm font-medium text-md py-2.5 px-6 rounded-md dark:shadow-md border bg-white border-red-400 hover:bg-red-500 hover:text-white text-red-600 dark:bg-black dark:text-red-400 dark:hover:bg-red-500 dark:hover:text-white dark:hover:border-red-500"
      >
        Button
      </button>
    </div>
  );
};

export default ButtonPrimary;
