const Input = (): JSX.Element => (
  <div>
    <label
      className="block mb-1 text-sm font-semibold text-zinc-900 dark:text-zinc-400"
      htmlFor="input"
    >
      Label
    </label>
    <input
      type="text"
      name="input"
      className="shadow-sm w-72 text-sm text-zinc-900 px-3 py-2 rounded-md border bg-white border-zinc-300 placeholder:text-zinc-500 focus:outline-emerald-500 focus:ring-emerald-500 focus:outline-0 dark:focus:border-emerald-500 dark:border-zinc-700 dark:text-zinc-100 dark:bg-zinc-700/40"
      placeholder="Placeholder"
    />
  </div>
);

export default Input;
