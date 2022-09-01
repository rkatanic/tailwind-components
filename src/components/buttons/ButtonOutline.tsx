const ButtonPrimary = () => {
  return (
    <div className="flex items-end gap-4">
      <button
        type="button"
        className="shadow-sm font-semibold text-sm border py-1.5 px-4 rounded-md dark:shadow-md border-zinc-300 bg-zinc-50 hover:bg-zinc-100 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-300 dark:border-zinc-500 dark:hover:bg-zinc-600 dark:hover:border-zinc-500 dark:hover:text-zinc-100"
      >
        Button
      </button>
      <button
        type="button"
        className="shadow-sm font-semibold text-sm border py-2 px-6 rounded-md dark:shadow-md border-zinc-300 bg-zinc-50 hover:bg-zinc-100 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-300 dark:border-zinc-500 dark:hover:bg-zinc-600 dark:hover:border-zinc-500 dark:hover:text-zinc-100"
      >
        Button
      </button>
      <button
        type="button"
        className="shadow-sm font-semibold text-md border py-2 px-8 rounded-md dark:shadow-md border-zinc-300 bg-zinc-50 hover:bg-zinc-100 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-300 dark:border-zinc-500 dark:hover:bg-zinc-600 dark:hover:border-zinc-500 dark:hover:text-zinc-100"
      >
        Button
      </button>
    </div>
  );
};

export default ButtonPrimary;
