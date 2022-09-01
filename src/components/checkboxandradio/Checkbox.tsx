const Checkbox = (): JSX.Element => (
  <div className="flex flex-col gap-4">
    <div className="flex items-center ">
      <input
        checked
        id="checkbox-one"
        name="checkbox-one"
        type="checkbox"
        className="cursor-pointer focus:ring-0 h-4 w-4 text-indigo-600 border-zinc-300 rounded"
      />
      <label
        htmlFor="checkbox-one"
        className="cursor-pointer  ml-2 text-sm text-zinc-800 dark:text-zinc-100"
      >
        Checked
      </label>
    </div>
    <div className="flex items-center ">
      <input
        id="checkbox-two"
        name="checkbox-two"
        type="checkbox"
        className="cursor-pointer focus:ring-0 h-4 w-4 text-indigo-600 border-zinc-300 rounded dark:bg-zinc-700 dark:checked:bg-indigo-600 dark:border-zinc-500"
      />
      <label
        htmlFor="checkbox-two"
        className="cursor-pointer  ml-2 text-sm text-zinc-800 dark:text-zinc-100"
      >
        Active
      </label>
    </div>
    <div className="flex items-center ">
      <input
        disabled
        id="checkbox-disabled"
        name="checkbox-disabled"
        type="checkbox"
        className="cursor-pointer focus:ring-0 h-4 w-4 text-indigo-600 border-zinc-300 rounded disabled:bg-zinc-100 disabled:cursor-not-allowed dark:bg-zinc-700 dark:border-zinc-500"
      />
      <label
        aria-disabled
        htmlFor="checkbox-disabled"
        className="cursor-pointer  ml-2 text-sm text-zinc-800 dark:text-zinc-400"
      >
        Disabled
      </label>
    </div>
  </div>
);

export default Checkbox;
