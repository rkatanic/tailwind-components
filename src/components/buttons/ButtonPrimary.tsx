const ButtonPrimary = () => {
  return (
    <div className="flex items-end gap-4">
      <button
        type="button"
        className="shadow-sm font-semibold text-sm border py-1.5 px-4 rounded-md dark:shadow-md bg-indigo-600 border-indigo-600 text-white hover:bg-indigo-500 hover:border-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 dark:hover:border-indigo-400 dark:border-indigo-500"
      >
        Button
      </button>
      <button
        type="button"
        className="shadow-sm font-semibold text-sm border py-2 px-6 rounded-md dark:shadow-md bg-indigo-600 border-indigo-600 text-white hover:bg-indigo-500 hover:border-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 dark:hover:border-indigo-400 dark:border-indigo-500"
      >
        Button
      </button>
      <button
        type="button"
        className="shadow-sm font-semibold text-md border py-2 px-8 rounded-md dark:shadow-md bg-indigo-600 border-indigo-600 text-white hover:bg-indigo-500 hover:border-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 dark:hover:border-indigo-400 dark:border-indigo-500"
      >
        Button
      </button>
    </div>
  );
};

export default ButtonPrimary;
