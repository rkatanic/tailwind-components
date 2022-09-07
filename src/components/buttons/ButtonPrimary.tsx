const ButtonPrimary = () => {
  return (
    <div className="flex items-end gap-4">
      <button
        type="button"
        className="shadow-sm font-medium text-sm py-2 px-6 rounded-md dark:shadow-md bg-cyan-500 text-white hover:bg-cyan-600"
      >
        Button
      </button>

      <button
        type="button"
        className="shadow-sm font-medium text-md py-2 px-6 rounded-md dark:shadow-md bg-cyan-500 text-white hover:bg-cyan-600"
      >
        Button
      </button>

      <button
        type="button"
        className="shadow-sm font-medium text-md py-2.5 px-8 rounded-md dark:shadow-md bg-cyan-500 text-white hover:bg-cyan-600"
      >
        Button
      </button>
    </div>
  );
};

export default ButtonPrimary;
