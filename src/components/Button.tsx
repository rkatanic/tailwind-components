const Button = (): JSX.Element => (
  <div className="flex flex-column gap-8">
    <button
      type="button"
      className="shadow-sm font-semibold text-sm border border-emerald-700 bg-gradient-to-b from-emerald-600 to-teal-600
       px-4 py-1.5 rounded-md text-white hover:border-emerald-800 hover:from-emerald-700 hover:to-teal-700 dark:shadow-md"
    >
      Button
    </button>

    <button
      type="button"
      className="shadow-sm font-semibold text-sm border border-rose-700 bg-rose-600 px-4 py-1.5 rounded-md text-white hover:bg-rose-700 hover:border-rose-800 dark:shadow-md dark:bg-rose-800 dark:hover:bg-rose-900"
    >
      Button
    </button>

    <button
      type="button"
      className="shadow-sm font-semibold text-sm border border-black bg-black px-4 py-1.5 rounded-md text-white hover:bg-zinc-800 dark:shadow-md"
    >
      Button
    </button>

    <button
      type="button"
      className="shadow-sm font-semibold text-sm border bg-zinc-50 border-zinc-300 px-4 py-1.5 rounded-md text-zinc-900 hover:bg-zinc-100 dark:shadow-md dark:text-zinc-300 dark:hover:bg-zinc-600 dark:hover:border-zinc-500 dark:border-zinc-600 dark:bg-zinc-700"
    >
      Button
    </button>
  </div>
);

export default Button;
