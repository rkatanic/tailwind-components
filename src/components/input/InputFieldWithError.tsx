const InputFieldWithError = (): JSX.Element => (
  <div>
    <label
      className="block mb-1 text-sm font-semibold text-zinc-600 dark:text-zinc-400"
      htmlFor="input"
    >
      Label<span className="text-red-600 dark:text-red-400">*</span>
    </label>
    <input
      type="text"
      name="input"
      className="border-red-600 shadow-sm w-72 text-sm text-zinc-800 px-3 py-1.5 rounded-md border bg-white placeholder:text-zinc-400 focus:outline-indigo-500 focus:ring-indigo-500 focus:outline-0 dark:focus:border-indigo-500 dark:border-red-400 dark:text-zinc-100 dark:bg-zinc-800"
      placeholder="Placeholder"
    />
    <span className="mt-1 block text-xs text-red-600 dark:text-red-400">
      This field is required
    </span>
  </div>
);

export default InputFieldWithError;
