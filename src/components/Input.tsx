const Input = (): JSX.Element => (
  <div>
    <label
      className="block mb-1 text-sm font-semibold text-gray-900 dark:text-gray-400"
      htmlFor="input"
    >
      Label
    </label>
    <input
      type="text"
      name="input"
      className="shadow-sm w-72 text-sm text-gray-900 px-3 py-2 rounded-md border bg-white border-gray-300  focus:outline-cyan-500 focus:ring-cyan-500 focus:outline-0 dark:focus:border-cyan-500 dark:border-gray-700 dark:text-gray-100 dark:bg-gray-700/40"
      placeholder="Placeholder"
    />
  </div>
);

export default Input;
