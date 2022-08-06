import { FiX } from "react-icons/fi";

const SideOverlay = (): JSX.Element => (
  <>
    <div className="absolute inset-0 bg-gray-50 "></div>

    <div className="relative float-right w-full max-w-sm  bg-white">
      <form className="h-full border-l shadow-xl">
        <h2 className="flex justify-between text-lg font-semibold p-6  border-b">
          New transaction
          <FiX size="1.5rem" className="stroke-gray-500 cursor-pointer" />
        </h2>

        <div className="flex flex-col gap-6  p-6">
          <div>
            <label
              className="block mb-1 text-sm font-semibold text-gray-900"
              htmlFor="input"
            >
              Name<span className="text-rose-500">*</span>
            </label>
            <input
              required
              type="text"
              name="name"
              className="shadow-sm w-full text-sm text-gray-900 px-3 py-2 rounded-md border border-gray-300  focus:outline-teal-500"
            />
          </div>

          <div>
            <label
              className="block mb-1 text-sm font-semibold text-gray-900"
              htmlFor="input"
            >
              Value<span className="text-rose-500">*</span>
            </label>
            <input
              required
              type="number"
              name="value"
              className="shadow-sm w-full text-sm text-gray-900 px-3 py-2 rounded-md border border-gray-300  focus:outline-teal-500"
            />
          </div>

          <div>
            <label
              className="block mb-1 text-sm font-semibold text-gray-900"
              htmlFor="input"
            >
              Date created<span className="text-rose-500">*</span>
            </label>
            <input
              required
              type="date"
              name="dateCreated"
              className="shadow-sm w-full text-sm text-gray-900 px-3 py-2 rounded-md border border-gray-300  focus:outline-teal-500"
            />
          </div>

          <div>
            <label
              htmlFor="select"
              className="block mb-1 text-sm font-semibold text-gray-900"
            >
              Category
            </label>
            <select
              id="select"
              name="category"
              className="w-full text-gray-900 shadow-sm rounded-md border border-gray-300 px-3 pr-9 py-2 text-sm focus:ring-teal-500 focus:border-teal-500 focus:outline-0"
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
            <span className="block mb-1 text-sm font-semibold text-gray-900">
              Type
            </span>
            <div className="flex items-center">
              <input
                id="income"
                name="transaction-types"
                type="radio"
                className="cursor-pointer focus:ring-0 h-4 w-4 text-teal-600 border-gray-300"
              />
              <label
                htmlFor="income"
                className="cursor-pointer ml-2 block text-sm font-medium text-gray-900"
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
                className="cursor-pointer focus:ring-0 h-4 w-4 text-teal-600 border-gray-300"
              />
              <label
                htmlFor="expense"
                className="cursor-pointer ml-2 block text-sm font-medium text-gray-900"
              >
                Expense
              </label>
            </div>
          </div>
        </div>

        <div className="border-t flex justify-end gap-4  px-6 py-4">
          <button
            type="button"
            className="shadow-sm font-semibold text-sm border border-gray-300 px-4 py-2 rounded-md text-gray-900 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="shadow-sm font-semibold text-sm border border-teal-700 bg-teal-600 px-4 py-2 rounded-md text-white hover:bg-teal-500 hover:border-teal-600"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  </>
);

export default SideOverlay;
