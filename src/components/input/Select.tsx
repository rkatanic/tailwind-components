const Select = (): JSX.Element => (
  <div>
    <label
      htmlFor="select"
      className="block mb-1 text-sm font-semibold text-zinc-600 dark:text-zinc-400"
    >
      Label
    </label>
    <select
      id="select"
      name="select"
      className="w-72 text-zinc-800 shadow-sm rounded-md border border-zinc-300 px-3 pr-9 py-1.5 text-sm focus:ring-indigo-500 focus:border-indigo-500 focus:outline-0 dark:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-600"
    >
      <option>Select option one</option>
      <option>Select option two</option>
      <option>Select option three</option>
      <option>Select option four</option>
    </select>
  </div>
);

export default Select;
