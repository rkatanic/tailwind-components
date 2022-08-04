const Select = (): JSX.Element => (
  <div>
    <label
      htmlFor="select"
      className="block mb-1 text-sm font-semibold text-gray-900"
    >
      Label
    </label>
    <select
      id="select"
      name="select"
      className="text-gray-900 shadow-sm rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-teal-500"
    >
      <option>Option one</option>
      <option>Option two</option>
      <option>Option three</option>
    </select>
  </div>
);

export default Select;
