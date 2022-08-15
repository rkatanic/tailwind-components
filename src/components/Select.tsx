const Select = (): JSX.Element => (
  <div>
    <label
      htmlFor="select"
      className="block mb-1 text-sm font-semibold text-zinc-900 dark:text-zinc-400"
    >
      Label
    </label>
    <select
      id="select"
      name="select"
      className="text-zinc-900 shadow-sm rounded-md border border-zinc-300 px-3 pr-9 py-2 text-sm focus:ring-emerald-500 focus:border-emerald-500 focus:outline-0 dark:bg-zinc-700/40 dark:text-zinc-100 dark:border-zinc-700"
    >
      <option>Select option one</option>
      <option>Select option two</option>
      <option>Select option three</option>
      <option>Select option four</option>
    </select>
  </div>
);

export default Select;
