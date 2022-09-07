const Radio = (): JSX.Element => (
  <div className="flex flex-col gap-4">
    <div className="flex items-center">
      <input
        checked
        id="radio-option-one"
        name="radio-options"
        type="radio"
        className="cursor-pointer focus:ring-0 h-4 w-4 text-cyan-500 border-gray-200  dark:bg-black dark:checked:bg-cyan-500 dark:border-gray-600"
      />
      <label
        htmlFor="radio-option-one"
        className=" cursor-pointer ml-2 block text-sm text-gray-800 dark:text-gray-100"
      >
        Checked
      </label>
    </div>

    <div className="flex items-center">
      <input
        id="radio-option-two"
        name="radio-options"
        type="radio"
        className="cursor-pointer focus:ring-0 h-4 w-4 text-cyan-500 border-gray-200  dark:bg-black dark:checked:bg-cyan-500 dark:border-gray-600"
      />
      <label
        htmlFor="radio-option-two"
        className="cursor-pointer ml-2 block text-sm text-gray-800 dark:text-gray-100"
      >
        Active
      </label>
    </div>
    <div className="flex items-center">
      <input
        disabled
        id="radio-option-three"
        name="radio-options"
        type="radio"
        className="cursor-pointer focus:ring-0 h-4 w-4 text-cyan-500 border-gray-200 disabled:bg-gray-100 disabled:cursor-not-allowed  dark:bg-gray-800 dark:checked:bg-cyan-600 dark:border-gray-600"
      />
      <label
        htmlFor="radio-option-three"
        className="cursor-pointer ml-2 block text-sm text-gray-800 dark:text-gray-400"
      >
        Disabled
      </label>
    </div>
  </div>
);

export default Radio;
