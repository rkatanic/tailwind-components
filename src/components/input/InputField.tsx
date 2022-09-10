const Input = (): JSX.Element => (
  <div>
    <label
      className="block mb-1.5 text-xs font-medium text-gray-900 dark:text-gray-300"
      htmlFor="input"
    >
      Name<span className="text-red-600 dark:text-red-400">*</span>
    </label>
    <input
      required
      type="text"
      name="input"
      className="w-72 text-sm text-gray-900 px-3 py-2 rounded-md border border-gray-200 placeholder:text-gray-400 focus:outline-cyan-500 focus:ring-cyan-500 focus:outline-0 dark:text-gray-50 dark:border-gray-700 dark:bg-black"
    />
  </div>
);

export default Input;
