const Toggle = () => (
  <label
    htmlFor="toggle"
    className="inline-flex relative items-center mb-5 cursor-pointer"
  >
    <input type="checkbox" value="" id="toggle" className="sr-only peer" />
    <div className="w-9 h-5 bg-zinc-200 peer-focus:outline-none peer-focus:ring-0 rounded-full peer dark:bg-zinc-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-zinc-600 peer-checked:bg-emerald-600"></div>
    <span className="ml-4 text-sm font-semibold text-zinc-900 dark:text-zinc-400">
      Toggle switch
    </span>
  </label>
);

export default Toggle;
