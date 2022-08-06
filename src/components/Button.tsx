const Button = (): JSX.Element => (
  <div className="flex flex-column gap-8">
    <button className="shadow-sm font-semibold text-sm border border-teal-700 bg-teal-600 px-4 py-2 rounded-md text-white hover:bg-teal-500 hover:border-teal-600">
      Button
    </button>
    <button className="shadow-sm font-semibold text-sm border border-rose-700 bg-rose-600 px-4 py-2 rounded-md text-white hover:bg-rose-500 hover:border-rose-600">
      Button
    </button>
    <button className="shadow-sm font-semibold text-sm border border-black bg-black px-4 py-2 rounded-md text-white hover:bg-gray-800">
      Button
    </button>
    <button className="shadow-sm font-semibold text-sm border border-gray-300 px-4 py-2 rounded-md text-gray-900 hover:bg-gray-50">
      Button
    </button>
  </div>
);

export default Button;
