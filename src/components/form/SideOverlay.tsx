import { FiX } from "react-icons/fi";

const SideOverlay = (): JSX.Element => (
  <>
    <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-900"></div>

    <div className="relative float-right w-full max-w-sm  bg-white dark:bg-zinc-700">
      <form className="h-full border-l shadow-xl dark:border-zinc-700">
        <h2 className="flex justify-between text-lg font-semibold px-4 py-6  border-b dark:text-zinc-200 dark:border-zinc-600">
          New transaction
          <FiX size="1.5rem" className="stroke-zinc-400 cursor-pointer" />
        </h2>

        <div className="flex flex-col gap-6 p-4">
          <div>
            <label
              className="block mb-1 text-sm font-semibold text-zinc-600 dark:text-zinc-400"
              htmlFor="input"
            >
              Name<span className="text-red-600 dark:text-red-400">*</span>
            </label>
            <input
              required
              type="text"
              name="input"
              className="w-full shadow-sm text-sm text-zinc-800 px-3 py-1.5 rounded-md border bg-white border-zinc-300 placeholder:text-zinc-400 focus:outline-indigo-500 focus:ring-indigo-500 focus:outline-0 dark:focus:border-indigo-500 dark:border-zinc-600 dark:text-zinc-100 dark:bg-zinc-800"
            />
          </div>

          <div>
            <label
              className="block mb-1 text-sm font-semibold text-zinc-600 dark:text-zinc-400"
              htmlFor="input"
            >
              Value<span className="text-red-600 dark:text-red-400">*</span>
            </label>
            <input
              required
              type="number"
              name="input"
              className="w-full shadow-sm text-sm text-zinc-800 px-3 py-1.5 rounded-md border bg-white border-zinc-300 placeholder:text-zinc-400 focus:outline-indigo-500 focus:ring-indigo-500 focus:outline-0 dark:focus:border-indigo-500 dark:border-zinc-600 dark:text-zinc-100 dark:bg-zinc-800"
            />
          </div>

          <div>
            <label
              className="block mb-1 text-sm font-semibold text-zinc-600 dark:text-zinc-400"
              htmlFor="input"
            >
              Date created
              <span className="text-red-600 dark:text-red-400">*</span>
            </label>
            <input
              required
              type="date"
              name="input"
              className="w-full shadow-sm text-sm text-zinc-800 px-3 py-1.5 rounded-md border bg-white border-zinc-300 placeholder:text-zinc-400 focus:outline-indigo-500 focus:ring-indigo-500 focus:outline-0 dark:focus:border-indigo-500 dark:border-zinc-600 dark:text-zinc-100 dark:bg-zinc-800"
            />
          </div>

          <div>
            <label
              htmlFor="select"
              className="block mb-1 text-sm font-semibold text-zinc-600 dark:text-zinc-400"
            >
              Label
            </label>
            <select
              id="select"
              name="select"
              className="w-full text-zinc-800 shadow-sm rounded-md border border-zinc-300 px-3 pr-9 py-1.5 text-sm focus:ring-indigo-500 focus:border-indigo-500 focus:outline-0 dark:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-600"
            >
              <option>Other</option>
              <option>Salary</option>
              <option>Electricity</option>
              <option>Housing</option>
              <option>Phone Bills</option>
              <option>Internet</option>
              <option>Food & Drinks</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <span className="block mb-1 text-sm font-semibold text-zinc-800 dark:text-zinc-400">
              Type
            </span>
            <div className="flex items-center">
              <input
                id="income"
                name="transaction-types"
                type="radio"
                className="cursor-pointer focus:ring-0 h-4 w-4 text-indigo-600 border-zinc-300 dark:bg-zinc-700 dark:checked:bg-indigo-600 dark:border-zinc-500"
              />
              <label
                htmlFor="income"
                className="cursor-pointer ml-2 block text-sm text-zinc-800 dark:text-zinc-100"
              >
                Income
              </label>
            </div>

            <div className="flex items-center">
              <input
                checked
                id="expense"
                name="transaction-types"
                type="radio"
                className="cursor-pointer border-none focus:outline-0 focus:ring-0 h-4 w-4 text-indigo-600 border-zinc-300 dark:bg-zinc-700 dark:checked:bg-indigo-600 dark:border-zinc-500"
              />
              <label
                htmlFor="expense"
                className="cursor-pointer ml-2 block text-sm text-zinc-800 dark:text-zinc-100"
              >
                Expense
              </label>
            </div>
          </div>
        </div>

        <div className="border-t flex justify-end gap-4 px-4 py-6 dark:border-zinc-600 mt-4">
          <button
            type="button"
            className="shadow-sm font-semibold text-sm border py-1.5 px-4 rounded-md dark:shadow-md border-zinc-300 bg-zinc-50 hover:bg-zinc-100 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-300 dark:border-zinc-500 dark:hover:bg-zinc-600 dark:hover:border-zinc-500 dark:hover:text-zinc-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="shadow-sm font-semibold text-sm border py-1.5 px-4 rounded-md dark:shadow-md bg-indigo-600 border-indigo-600 text-white hover:bg-indigo-500 hover:border-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 dark:hover:border-indigo-400 dark:border-indigo-500"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  </>
);

export default SideOverlay;
