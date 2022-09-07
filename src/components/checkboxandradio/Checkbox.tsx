const Checkbox = (): JSX.Element => (
  <div className="flex flex-col gap-4">
    <div className="flex items-center ">
      <input
        checked
        id="checkbox-one"
        name="checkbox-one"
        type="checkbox"
        className="cursor-pointer focus:ring-0 h-4 w-4 text-cyan-500 border-gray-200 rounded"
      />
      <label
        htmlFor="checkbox-one"
        className="cursor-pointer  ml-2 text-sm text-gray-800 dark:text-gray-100"
      >
        Checked
      </label>
    </div>
    <div className="flex items-center ">
      <input
        id="checkbox-two"
        name="checkbox-two"
        type="checkbox"
        className="cursor-pointer focus:ring-0 h-4 w-4 text-cyan-500 border-gray-200 rounded dark:bg-black dark:checked:bg-cyan-500 dark:border-gray-600"
      />
      <label
        htmlFor="checkbox-two"
        className="cursor-pointer  ml-2 text-sm text-gray-800 dark:text-gray-100"
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
        className="cursor-pointer focus:ring-0 h-4 w-4 text-cyan-500 border-gray-200 rounded disabled:bg-gray-100 disabled:cursor-not-allowed dark:bg-gray-800 dark:border-gray-600"
      />
      <label
        aria-disabled
        htmlFor="checkbox-disabled"
        className="cursor-pointer  ml-2 text-sm text-gray-800 dark:text-gray-400"
      >
        Disabled
      </label>
    </div>
  </div>
);

export default Checkbox;
