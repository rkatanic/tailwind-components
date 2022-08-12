const Input = (): JSX.Element => (
  <div>
    <label
      className="block mb-1 text-sm font-semibold text-gray-900 dark:text-zinc-400"
      htmlFor="input"
    >
      Label
    </label>
    <input
      name="input"
      className="shadow-sm w-72 text-sm text-gray-900 px-3 py-2 rounded-md border border-gray-300  focus:outline-teal-500 dark:focus:outline-0 dark:focus:border-teal-500 dark:border-zinc-700 dark:text-zinc-100 dark:bg-zinc-700/25"
      placeholder="Placeholder"
    />
  </div>
);

export default Input;
