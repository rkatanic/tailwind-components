const Textarea = (): JSX.Element => (
  <div>
    <label
      className="block mb-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-300"
      htmlFor="input"
    >
      Label
    </label>
    <textarea
      rows={5}
      name="input"
      className="w-96 text-sm text-gray-900 px-3 py-2 rounded-md border border-gray-200 placeholder:text-zinc-400 focus:outline-cyan-500 focus:ring-cyan-500 focus:outline-0 dark:text-zinc-50 dark:border-gray-700 dark:bg-black"
    />
  </div>
);

export default Textarea;
