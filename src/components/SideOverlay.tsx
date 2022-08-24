import { FiX } from "react-icons/fi";

const SideOverlay = (): JSX.Element => (
  <>
    <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-900"></div>

    <div className="relative float-right w-full max-w-sm  bg-white dark:bg-zinc-800">
      <form className="h-full border-l shadow-xl dark:border-zinc-700">
        <h2 className="flex justify-between text-lg font-semibold p-6  border-b dark:text-zinc-300 dark:border-zinc-700">
          New transaction
          <FiX size="1.5rem" className="stroke-zinc-500 cursor-pointer" />
        </h2>

        <div className="flex flex-col gap-6 p-6">
          <div>
            <label
              className="block mb-1 text-sm font-semibold text-zinc-900 dark:text-zinc-400"
              htmlFor="input"
            >
              Name<span className="text-rose-500 dark:text-rose-800">*</span>
            </label>
            <input
              required
              type="text"
              name="name"
              className="focus:outline-0 focus:ring-emerald-500 shadow-sm w-full text-sm text-zinc-900 px-3 py-1.5 rounded-md border border-zinc-300  focus:outline-emerald-500 dark:text-zinc-100 dark:bg-zinc-900/30 dark:border-zinc-700"
            />
          </div>

          <div>
            <label
              className="block mb-1 text-sm font-semibold text-zinc-900 dark:text-zinc-400"
              htmlFor="input"
            >
              Value<span className="text-rose-500 dark:text-rose-800">*</span>
            </label>
            <input
              required
              type="number"
              name="value"
              className="focus:outline-0 focus:ring-emerald-500 shadow-sm w-full text-sm text-zinc-900 px-3 py-1.5 rounded-md border border-zinc-300  focus:outline-emerald-500 dark:text-zinc-100 dark:bg-zinc-900/30 dark:border-zinc-700"
            />
          </div>

          <div>
            <label
              className="block mb-1 text-sm font-semibold text-zinc-900 dark:text-zinc-400"
              htmlFor="input"
            >
              Date created
              <span className="text-rose-500 dark:text-rose-800">*</span>
            </label>
            <input
              required
              type="date"
              name="dateCreated"
              className="focus:outline-0 focus:ring-emerald-500 shadow-sm w-full text-sm text-zinc-900 px-3 py-1.5 rounded-md border border-zinc-300  focus:outline-emerald-500 dark:text-zinc-100 dark:bg-zinc-900/30 dark:border-zinc-700"
            />
          </div>

          <div>
            <label
              htmlFor="select"
              className="block mb-1 text-sm font-semibold text-zinc-900 dark:text-zinc-400"
            >
              Category
            </label>
            <select
              id="select"
              name="category"
              className="w-full text-zinc-900 shadow-sm rounded-md border border-zinc-300 px-3 pr-9 py-1.5 text-sm focus:ring-emerald-500  focus:outline-0 dark:text-zinc-100 dark:bg-zinc-900/30 dark:border-zinc-700"
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
            <span className="block mb-1 text-sm font-semibold text-zinc-900 dark:text-zinc-400">
              Type
            </span>
            <div className="flex items-center">
              <input
                id="income"
                name="transaction-types"
                type="radio"
                className="cursor-pointer focus:ring-0 h-4 w-4 text-emerald-600 border-zinc-300 dark:bg-zinc-700 dark:checked:bg-emerald-600 dark:border-zinc-500"
              />
              <label
                htmlFor="income"
                className="cursor-pointer ml-2 block text-sm text-zinc-900 dark:text-zinc-100"
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
                className="cursor-pointer border-none focus:outline-0 focus:ring-0 h-4 w-4 text-emerald-600 border-zinc-300 dark:bg-zinc-700 dark:checked:bg-emerald-600 dark:border-zinc-500"
              />
              <label
                htmlFor="expense"
                className="cursor-pointer ml-2 block text-sm text-zinc-900 dark:text-zinc-100"
              >
                Expense
              </label>
            </div>
          </div>
        </div>

        <div className="border-t flex justify-end gap-4  px-6 py-4 dark:border-zinc-700">
          <button
            type="button"
            className="shadow-sm font-semibold text-sm border border-zinc-300 bg-zinc-50 px-4 py-1.5 rounded-md text-zinc-900 hover:bg-zinc-100 dark:shadow-md dark:bg-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-600 dark:border-zinc-600 dark:hover:border-zinc-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="shadow-sm font-semibold text-sm border border-emerald-700 bg-gradient-to-b from-emerald-600 to-teal-600
       px-4 py-1.5 rounded-md text-white hover:border-emerald-800 hover:from-emerald-700 hover:to-teal-700 dark:shadow-md"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  </>
);

export default SideOverlay;
