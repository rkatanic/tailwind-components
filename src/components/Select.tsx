const Select = (): JSX.Element => (
  <div>
    <label
      htmlFor="select"
      className="block mb-1 text-sm font-semibold text-gray-900 dark:text-gray-400"
    >
      Label
    </label>
    <select
      id="select"
      name="select"
      className="text-gray-900 shadow-sm rounded-md border border-gray-300 px-3 pr-9 py-2 text-sm focus:ring-cyan-500 focus:border-cyan-500 focus:outline-0 dark:bg-gray-700/40 dark:text-gray-100 dark:border-gray-700"
    >
      <option>Select option one</option>
      <option>Select option two</option>
      <option>Select option three</option>
      <option>Select option four</option>
    </select>
  </div>
);

export default Select;
