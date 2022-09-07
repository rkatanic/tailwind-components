import { FiX } from "react-icons/fi";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";

const SideOverlay = (): JSX.Element => (
  <>
    <div className="absolute inset-0 bg-zinc-100 dark:bg-black"></div>

    <div className="bg-white relative float-right w-full max-w-sm  dark:bg-zinc-800">
      <form className="h-full border shadow-xl dark:border-zinc-700">
        <h2 className="flex justify-between text-lg font-medium px-4 py-6 pb-4 dark:text-zinc-200">
          New transaction
          <FiX size="1.5rem" className="stroke-zinc-400 cursor-pointer" />
        </h2>

        <div className="flex flex-col gap-6 p-4">
          <div>
            <label
              className="block mb-1.5 text-xs font-semibold text-zinc-600 dark:text-zinc-400"
              htmlFor="input"
            >
              Name<span className="text-red-600 dark:text-red-400">*</span>
            </label>
            <input
              required
              type="text"
              name="input"
              className="w-full shadow-sm border-none text-sm text-zinc-800 px-3 py-2 rounded bg-zinc-100 placeholder:text-zinc-400 focus:outline-cyan-500 focus:ring-cyan-500 focus:outline-0  dark:text-zinc-100 dark:bg-zinc-700"
            />
          </div>

          <div>
            <label
              className="block mb-1.5 text-xs font-semibold text-zinc-600 dark:text-zinc-400"
              htmlFor="input"
            >
              Value<span className="text-red-600 dark:text-red-400">*</span>
            </label>
            <input
              required
              type="number"
              name="input"
              className="border-none w-full shadow-sm text-sm text-zinc-800 px-3 py-2 rounded bg-zinc-100 placeholder:text-zinc-400 focus:outline-cyan-500 focus:ring-cyan-500 focus:outline-0 dark:text-zinc-100 dark:bg-zinc-700"
            />
          </div>

          <div>
            <label
              className="block mb-1.5 text-xs font-semibold text-zinc-600 dark:text-zinc-400"
              htmlFor="input"
            >
              Date created
              <span className="text-red-600 dark:text-red-400">*</span>
            </label>
            <input
              required
              type="date"
              name="input"
              className="border-none w-full shadow-sm text-sm text-zinc-800 px-3 py-2 rounded bg-zinc-100 placeholder:text-zinc-400 focus:outline-cyan-500 focus:ring-cyan-500 focus:outline-0 dark:text-zinc-100 dark:bg-zinc-700"
            />
          </div>

          <div>
            <label
              htmlFor="select"
              className="block mb-1.5 text-xs font-semibold text-zinc-600 dark:text-zinc-400"
            >
              Label
            </label>
            <select
              id="select"
              name="select"
              className="border-none w-full text-zinc-800 shadow-sm rounded bg-zinc-100 px-3 pr-9 py-2 text-sm focus:ring-cyan-500 focus:outline-0 dark:bg-zinc-700 dark:text-zinc-100"
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
            <span className="block mb-1.5 text-xs font-semibold text-zinc-800 dark:text-zinc-400">
              Type
            </span>
            <div className="flex gap-4 items-center">
              <input
                checked
                id="income"
                name="transaction-types"
                type="radio"
                className="peer p-4 sr-only border-none cursor-pointer focus:ring-0 h-4 w-4 text-cyan-600 bg-zinc-200 dark:bg-zinc-500 dark:checked:bg-cyan-600"
              />
              <label
                htmlFor="income"
                className="flex flex-col items-center justify-center peer-checked:border-cyan-400 peer-checked:bg-cyan-50/50 peer-checked:text-cyan-600 dark:peer-checked:bg-cyan-800/10 dark:peer-checked:border-cyan-700 dark:peer-checked:text-cyan-300 border dark:border-zinc-700 rounded p-4 cursor-pointer ml-2 font-medium text-sm text-zinc-800 dark:text-zinc-300"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-50 dark:bg-zinc-500/10 mb-2">
                  <HiTrendingUp
                    size="1.25rem"
                    className="fill-cyan-600 dark:fill-zinc-300"
                  />
                </div>
                Income
              </label>

              <div>
                <input
                  id="expense"
                  name="transaction-types"
                  type="radio"
                  className="sr-only peer cursor-pointer border-none focus:outline-0 focus:ring-0 h-4 w-4 text-cyan-600 bg-zinc-200 dark:bg-zinc-500 dark:checked:bg-cyan-600"
                />
                <label
                  htmlFor="expense"
                  className="flex flex-col items-center justify-center peer-checked:border-cyan-400 peer-checked:bg-cyan-50 peer-checked:text-cyan-600 dark:peer-checked:bg-cyan-800/10 dark:peer-checked:border-cyan-700 dark:peer-checked:text-cyan-300 border dark:border-zinc-700 rounded p-4 cursor-pointer ml-2 font-medium text-sm text-zinc-800 dark:text-zinc-300"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-50 dark:bg-zinc-500/10 mb-2">
                    <HiTrendingDown
                      size="1.25rem"
                      className="fill-cyan-600 dark:fill-zinc-300"
                    />
                  </div>
                  Expense
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 px-3 py-6 mt-4">
          <button
            type="button"
            className="shadow-sm font-semibold text-sm py-2 px-6 rounded dark:shadow-md bg-zinc-100 hover:bg-zinc-200 text-zinc-900 dark:bg-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-500 dark:hover:text-zinc-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="shadow-sm font-medium text-sm py-2 px-6 rounded dark:shadow-md bg-cyan-600 text-white hover:bg-cyan-700"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  </>
);

export default SideOverlay;
