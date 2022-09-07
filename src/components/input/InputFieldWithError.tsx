const InputFieldWithError = (): JSX.Element => (
  <div>
    <label
      className="block mb-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-300"
      htmlFor="input"
    >
      Name<span className="text-red-600 dark:text-red-400">*</span>
    </label>
    <input
      required
      type="text"
      name="input"
      className="w-72 text-sm text-gray-900 px-3 py-2 rounded-md border border-red-400 placeholder:text-zinc-400 focus:outline-cyan-500 focus:ring-cyan-500 focus:outline-0 dark:text-zinc-50 dark:bg-black"
    />
    <span className="mt-1 block text-xs text-red-600 dark:text-red-400">
      This field is required
    </span>
  </div>
);

export default InputFieldWithError;
