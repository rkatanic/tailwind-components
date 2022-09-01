const InputDatePicker = (): JSX.Element => (
  <div>
    <input
      type="date"
      name="input"
      className="shadow-sm w-72 text-sm text-zinc-800 px-3 py-1.5 rounded-md border bg-white border-zinc-300 placeholder:text-zinc-400 focus:outline-indigo-500 focus:ring-indigo-500 focus:outline-0 dark:focus:border-indigo-500 dark:border-zinc-600 dark:text-zinc-100 dark:bg-zinc-800"
      placeholder="Placeholder"
    />
  </div>
);

export default InputDatePicker;
