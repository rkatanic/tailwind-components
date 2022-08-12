const Button = (): JSX.Element => (
  <div className="flex flex-column gap-8">
    <button
      type="button"
      className="shadow-sm font-semibold text-sm border border-cyan-700 bg-cyan-600 px-4 py-2 rounded-md text-white hover:bg-cyan-500 hover:border-cyan-600 dark:shadow-md"
    >
      Button
    </button>
    <button
      type="button"
      className="shadow-sm font-semibold text-sm border border-rose-700 bg-rose-600 px-4 py-2 rounded-md text-white hover:bg-rose-500 hover:border-rose-700 dark:shadow-md dark:bg-rose-800 dark:hover:bg-rose-700"
    >
      Button
    </button>
    <button
      type="button"
      className="shadow-sm font-semibold text-sm border border-black bg-black px-4 py-2 rounded-md text-white hover:bg-gray-800 dark:shadow-md"
    >
      Button
    </button>
    <button
      type="button"
      className="shadow-sm font-semibold text-sm border border-gray-300 px-4 py-2 rounded-md text-gray-900 hover:bg-gray-50 dark:shadow-md dark:text-gray-100 dark:hover:bg-gray-700 dark:border-gray-600"
    >
      Button
    </button>
  </div>
);

export default Button;
