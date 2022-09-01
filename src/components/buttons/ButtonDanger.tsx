const ButtonPrimary = () => {
  return (
    <div className="flex items-end gap-4">
      <button
        type="button"
        className="shadow-sm font-semibold text-sm border py-1.5 px-4 rounded-md dark:shadow-md bg-red-600 border-red-700 text-white hover:bg-red-500 hover:border-red-600 dark:bg-red-600 dark:hover:bg-red-500 dark:hover:border-red-400 dark:border-red-500"
      >
        Button
      </button>
      <button
        type="button"
        className="shadow-sm font-semibold text-sm border py-2 px-6 rounded-md dark:shadow-md bg-red-600 border-red-700 text-white hover:bg-red-500 hover:border-red-600 dark:bg-red-600 dark:hover:bg-red-500 dark:hover:border-red-400 dark:border-red-500"
      >
        Button
      </button>
      <button
        type="button"
        className="shadow-sm font-semibold text-md border py-2 px-8 rounded-md dark:shadow-md bg-red-600 border-red-700 text-white hover:bg-red-500 hover:border-red-600 dark:bg-red-600 dark:hover:bg-red-500 dark:hover:border-red-400 dark:border-red-500"
      >
        Button
      </button>
    </div>
  );
};

export default ButtonPrimary;
