const ButtonPrimary = () => {
  return (
    <div className="flex items-end gap-4">
      <button
        type="button"
        className="shadow-sm font-medium text-sm py-2 px-6 rounded-md dark:shadow-md border bg-white hover:bg-gray-50 text-gray-700 dark:border-gray-600 dark:bg-black dark:text-gray-100 dark:hover:bg-gray-900"
      >
        Button
      </button>

      <button
        type="button"
        className="shadow-sm font-medium text-md py-2 px-6 rounded-md dark:shadow-md border bg-white hover:bg-gray-50 text-gray-700 dark:border-gray-600 dark:bg-black dark:text-gray-100 dark:hover:bg-gray-900"
      >
        Button
      </button>

      <button
        type="button"
        className="shadow-sm font-medium text-md py-2.5 px-6 rounded-md dark:shadow-md border bg-white hover:bg-gray-50 text-gray-700 dark:border-gray-600 dark:bg-black dark:text-gray-100 dark:hover:bg-gray-900"
      >
        Button
      </button>
    </div>
  );
};

export default ButtonPrimary;
