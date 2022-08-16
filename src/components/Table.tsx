import { FiTrash2, FiEdit2, FiArrowRight, FiArrowLeft } from "react-icons/fi";

const Table = (): JSX.Element => (
  <div>
    <table className="w-full overflow-hidden rounded-md shadow-sm">
      <tbody className="text-left text-sm border dark:border-zinc-800">
        <th className="border-b p-4 px-8 bg-gray-50 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300 font-semibold dark:border-zinc-800">
          Name
        </th>
        <th className="border-b p-4 px-8 bg-gray-50 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300 font-semibold dark:border-zinc-800">
          Amount
        </th>
        <th className="hidden border-b p-4 px-8 bg-gray-50 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300 font-semibold dark:border-zinc-800 md:table-cell">
          Type
        </th>
        <th className="hidden border-b p-4 px-8 bg-gray-50 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300 font-semibold dark:border-zinc-800 sm:table-cell">
          Category
        </th>
        <th className="hidden border-b p-4 px-8 bg-gray-50 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300 font-semibold dark:border-zinc-800 lg:table-cell">
          Date created
        </th>
        <th className="text-right border-b p-4 px-8 bg-gray-50 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300 font-semibold dark:border-zinc-800">
          Actions
        </th>

        <tr className="bg-white dark:bg-zinc-900 border-b dark:border-zinc-800">
          <td className="p-4 px-8 font-semibold text-zinc-800 dark:text-zinc-400">
            Salary
          </td>
          <td className="p-4 px-8 font-semibold text-zinc-800 dark:text-zinc-400">
            1.000{" "}
            <span className="text-xs text-zinc-400 dark:text-zinc-500 font-normal">
              BAM
            </span>
          </td>
          <td className="hidden p-4 px-8 font-semibold md:table-cell">
            <span className="bg-emerald-50 text-emerald-500 font-normal py-1 px-2.5 rounded-full dark:bg-emerald-900/30 dark:text-emerald-500  ">
              Income
            </span>
          </td>
          <td className="hidden p-4 px-8 text-zinc-500 dark:text-zinc-400 sm:table-cell">
            Income
          </td>
          <td className="hidden p-4 px-8 text-zinc-500 dark:text-zinc-400 lg:table-cell">
            1 August, 2022
          </td>
          <td className="p-4 px-8 text-zinc-800 dark:text-zinc-400 flex justify-end gap-4">
            <FiEdit2
              size="1rem"
              className="stroke-zinc-500 hover:stroke-emerald-500 cursor-pointer"
            />
            <FiTrash2
              size="1rem"
              className="stroke-zinc-500 hover:stroke-rose-500 cursor-pointer"
            />
          </td>
        </tr>

        <tr className="bg-white dark:bg-zinc-900  border-b dark:border-zinc-800">
          <td className="p-4 px-8 font-semibold text-zinc-800 dark:text-zinc-400">
            Phone bill
          </td>
          <td className="p-4 px-8 font-semibold text-zinc-800 dark:text-zinc-400">
            99{" "}
            <span className="text-xs text-zinc-400 dark:text-zinc-500 font-normal">
              BAM
            </span>
          </td>
          <td className="hidden p-4 px-8 font-semibold md:table-cell">
            <span className="bg-zinc-100 text-zinc-600 font-normal py-1 px-2.5 rounded-full dark:bg-zinc-800/50 dark:text-zinc-400">
              Expense
            </span>
          </td>
          <td className="hidden p-4 px-8 text-zinc-500 dark:text-zinc-400 sm:table-cell">
            Other
          </td>
          <td className="hidden p-4 px-8 text-zinc-500 dark:text-zinc-400 lg:table-cell">
            31 July, 2022
          </td>
          <td className="p-4 px-8 text-zinc-800 dark:text-zinc-400 flex justify-end gap-4">
            <FiEdit2
              size="1rem"
              className="stroke-zinc-500 hover:stroke-emerald-500 cursor-pointer"
            />
            <FiTrash2
              size="1rem"
              className="stroke-zinc-500 hover:stroke-rose-500 cursor-pointer"
            />
          </td>
        </tr>

        <tr className="bg-white dark:bg-zinc-900  border-b dark:border-zinc-800">
          <td className="p-4 px-8 font-semibold text-zinc-800 dark:text-zinc-400">
            Electricity
          </td>
          <td className="p-4 px-8 font-semibold text-zinc-800 dark:text-zinc-400">
            175.24{" "}
            <span className="text-xs text-zinc-400 dark:text-zinc-500 font-normal">
              BAM
            </span>
          </td>
          <td className="hidden p-4 px-8 font-semibold md:table-cell">
            <span className="bg-zinc-100 text-zinc-600 font-normal py-1 px-2.5 rounded-full dark:bg-zinc-800/50 dark:text-zinc-400">
              Expense
            </span>
          </td>
          <td className="hidden p-4 px-8 text-zinc-500 dark:text-zinc-400 sm:table-cell">
            Housing
          </td>
          <td className="hidden p-4 px-8 text-zinc-500 dark:text-zinc-400 lg:table-cell">
            30 July, 2022
          </td>
          <td className="p-4 px-8 text-zinc-800 dark:text-zinc-400 flex justify-end gap-4">
            <FiEdit2
              size="1rem"
              className="stroke-zinc-500 hover:stroke-emerald-500 cursor-pointer"
            />
            <FiTrash2
              size="1rem"
              className="stroke-zinc-500 hover:stroke-rose-500 cursor-pointer"
            />
          </td>
        </tr>

        <tr className="bg-white dark:bg-zinc-900  border-b dark:border-zinc-800">
          <td className="p-4 px-8 font-semibold text-zinc-800 dark:text-zinc-400">
            Groceries
          </td>
          <td className="p-4 px-8 font-semibold text-zinc-800 dark:text-zinc-400">
            392.37{" "}
            <span className="text-xs text-zinc-400 dark:text-zinc-500 font-normal">
              BAM
            </span>
          </td>
          <td className="hidden p-4 px-8 font-semibold md:table-cell">
            <span className="bg-zinc-100 text-zinc-600 font-normal py-1 px-2.5 rounded-full dark:bg-zinc-800/50 dark:text-zinc-400">
              Expense
            </span>
          </td>
          <td className="hidden p-4 px-8 text-zinc-500 dark:text-zinc-400 sm:table-cell">
            Food & Drinks
          </td>
          <td className="hidden p-4 px-8 text-zinc-500 dark:text-zinc-400 lg:table-cell">
            25 July, 2022
          </td>
          <td className="p-4 px-8 text-zinc-800 dark:text-zinc-400 flex justify-end gap-4">
            <FiEdit2
              size="1rem"
              className="stroke-zinc-500 hover:stroke-emerald-500 cursor-pointer"
            />
            <FiTrash2
              size="1rem"
              className="stroke-zinc-500 hover:stroke-rose-500 cursor-pointer"
            />
          </td>
        </tr>

        <tr className="bg-white dark:bg-zinc-900">
          <td className="p-4 px-8 font-semibold text-zinc-800 dark:text-zinc-400">
            Gas
          </td>
          <td className="p-4 px-8 font-semibold text-zinc-800 dark:text-zinc-400">
            200{" "}
            <span className="text-xs text-zinc-400 dark:text-zinc-500 font-normal">
              BAM
            </span>
          </td>
          <td className="hidden p-4 px-8 font-semibold md:table-cell">
            <span className="bg-zinc-100 text-zinc-600 font-normal py-1 px-2.5 rounded-full dark:bg-zinc-800/50 dark:text-zinc-400">
              Expense
            </span>
          </td>
          <td className="hidden p-4 px-8 text-zinc-500 dark:text-zinc-400 sm:table-cell">
            Other
          </td>
          <td className="hidden p-4 px-8 text-zinc-500 dark:text-zinc-400 lg:table-cell">
            14 July, 2022
          </td>
          <td className="p-4 px-8 text-zinc-800 dark:text-zinc-400 flex justify-end gap-4">
            <FiEdit2
              size="1rem"
              className="stroke-zinc-500 hover:stroke-emerald-500 cursor-pointer"
            />
            <FiTrash2
              size="1rem"
              className="stroke-zinc-500 hover:stroke-rose-500 cursor-pointer"
            />
          </td>
        </tr>
      </tbody>
    </table>

    <div className="mt-4 flex justify-between">
      <div className="flex gap-4 items-center">
        <span className="hidden text-sm text-zinc-500">Rows per page</span>
        <select
          id="select"
          name="select"
          className="text-zinc-900 shadow-sm rounded-md border border-zinc-300 px-3 pr-7 py-2 text-sm focus:ring-emerald-500 focus:border-emerald-500 focus:outline-0 dark:bg-zinc-900 dark:text-zinc-100 dark:border-zinc-800"
        >
          <option>5</option>
          <option>10</option>
          <option>15</option>
          <option>20</option>
        </select>
      </div>

      <div className="flex bg-white border rounded-md overflow-hidden shadow-sm dark:bg-zinc-900 dark:border-zinc-800">
        <button
          className="text-sm py-3 px-4 flex items-center justify-center hover:bg-zinc-50 dark:hover:bg-zinc-800"
          type="button"
        >
          <FiArrowLeft className="stroke-zinc-500 dark:stroke-zinc-400" />
        </button>
        <div className="w-px h-full bg-zinc-200 dark:bg-zinc-800"></div>
        <button
          className="text-sm py-3 px-4 flex items-center justify-center hover:bg-zinc-50 dark:hover:bg-zinc-800"
          type="button"
        >
          <FiArrowRight className="stroke-zinc-500 dark:stroke-zinc-400" />
        </button>
      </div>
    </div>
  </div>
);

export default Table;
