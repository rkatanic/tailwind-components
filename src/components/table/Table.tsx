import { FiTrash2, FiEdit2, FiArrowRight, FiArrowLeft } from "react-icons/fi";

const Table = (): JSX.Element => (
  <table className="w-full overflow-hidden rounded shadow-sm">
    <tbody className="text-left text-sm border dark:border-gray-600">
      <th className="p-4 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-300 font-semibold">
        Name
      </th>
      <th className="p-4 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-300 font-semibold">
        Amount
      </th>
      <th className="hidden p-4 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-300 font-semibold md:table-cell">
        Type
      </th>
      <th className="hidden p-4 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-300 font-semibold sm:table-cell">
        Category
      </th>
      <th className="hidden p-4 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-300 font-semibold lg:table-cell">
        Date created
      </th>
      <th className="text-right p-4 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-300 font-semibold">
        Actions
      </th>

      <tr className="bg-white dark:bg-black border-t dark:border-gray-600">
        <td className="p-4 font-semibold text-gray-900 dark:text-gray-400">
          Salary
        </td>
        <td className="whitespace-nowrap p-4 font-semibold text-gray-900 dark:text-gray-400">
          1.000{" "}
          <span className="text-xs text-gray-400 dark:text-gray-500 font-normal">
            BAM
          </span>
        </td>
        <td className="hidden p-4 font-semibold md:table-cell">
          <span className="rounded-full border text-xs font-medium px-3 py-0.5 border-emerald-400 bg-emerald-50 text-emerald-500 dark:border-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
            Income
          </span>
        </td>
        <td className="hidden p-4 text-gray-500 dark:text-gray-400 sm:flex sm:items-center sm:gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div> Income
        </td>
        <td className="hidden p-4 text-gray-500 dark:text-gray-400 lg:table-cell">
          1 August, 2022
        </td>
        <td className="p-4 text-gray-900 dark:text-gray-400 flex justify-end gap-4">
          <FiEdit2
            size="1rem"
            className="stroke-gray-400 hover:stroke-cyan-500 cursor-pointer"
          />
          <FiTrash2
            size="1rem"
            className="stroke-gray-400 hover:stroke-red-500 cursor-pointer"
          />
        </td>
      </tr>

      <tr className="bg-white dark:bg-black border-t dark:border-gray-600">
        <td className="p-4 font-semibold text-gray-900 dark:text-gray-400">
          Phone bill
        </td>
        <td className="whitespace-nowrap p-4 font-semibold text-gray-900 dark:text-gray-400">
          99{" "}
          <span className="text-xs text-gray-400 dark:text-gray-500 font-normal">
            BAM
          </span>
        </td>
        <td className="hidden p-4 font-semibold md:table-cell">
          <span className="rounded-full border text-xs font-medium px-3 py-0.5 border-gray-400 bg-gray-50 text-gray-500 dark:border-gray-600 dark:bg-gray-500/10 dark:text-gray-400">
            Expense
          </span>
        </td>
        <td className="hidden p-4 text-gray-500 dark:text-gray-400 sm:flex sm:items-center sm:gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div> Telephone
        </td>
        <td className="hidden p-4 text-gray-500 dark:text-gray-400 lg:table-cell">
          31 July, 2022
        </td>
        <td className="p-4 text-gray-900 dark:text-gray-400 flex justify-end gap-4">
          <FiEdit2
            size="1rem"
            className="stroke-gray-400 hover:stroke-cyan-500 cursor-pointer"
          />
          <FiTrash2
            size="1rem"
            className="stroke-gray-400 hover:stroke-red-500 cursor-pointer"
          />
        </td>
      </tr>

      <tr className="bg-white dark:bg-black border-t dark:border-gray-600">
        <td className="p-4 font-semibold text-gray-900 dark:text-gray-400">
          Electricity
        </td>
        <td className="whitespace-nowrap p-4 font-semibold text-gray-900 dark:text-gray-400">
          175.24{" "}
          <span className="text-xs text-gray-400 dark:text-gray-500 font-normal">
            BAM
          </span>
        </td>
        <td className="hidden p-4 font-semibold md:table-cell">
          <span className="rounded-full border text-xs font-medium px-3 py-0.5 border-gray-400 bg-gray-50 text-gray-500 dark:border-gray-600 dark:bg-gray-500/10 dark:text-gray-400">
            Expense
          </span>
        </td>
        <td className="hidden p-4 text-gray-500 dark:text-gray-400 sm:flex sm:items-center sm:gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div> Housing
        </td>
        <td className="hidden p-4 text-gray-500 dark:text-gray-400 lg:table-cell">
          30 July, 2022
        </td>
        <td className="p-4 text-gray-900 dark:text-gray-400 flex justify-end gap-4">
          <FiEdit2
            size="1rem"
            className="stroke-gray-400 hover:stroke-cyan-500 cursor-pointer"
          />
          <FiTrash2
            size="1rem"
            className="stroke-gray-400 hover:stroke-red-500 cursor-pointer"
          />
        </td>
      </tr>

      <tr className="bg-white dark:bg-black border-t dark:border-gray-600">
        <td className="p-4 font-semibold text-gray-900 dark:text-gray-400">
          Groceries
        </td>
        <td className="whitespace-nowrap p-4 font-semibold text-gray-900 dark:text-gray-400">
          392.37{" "}
          <span className="text-xs text-gray-400 dark:text-gray-500 font-normal">
            BAM
          </span>
        </td>
        <td className="hidden p-4 font-semibold md:table-cell">
          <span className="rounded-full border text-xs font-medium px-3 py-0.5 border-gray-400 bg-gray-50 text-gray-500 dark:border-gray-600 dark:bg-gray-500/10 dark:text-gray-400">
            Expense
          </span>
        </td>
        <td className="hidden p-4 text-gray-500 dark:text-gray-400 sm:flex sm:items-center sm:gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400"></div> Food &
          Drinks
        </td>
        <td className="hidden p-4 text-gray-500 dark:text-gray-400 lg:table-cell">
          25 July, 2022
        </td>
        <td className="p-4 text-gray-900 dark:text-gray-400 flex justify-end gap-4">
          <FiEdit2
            size="1rem"
            className="stroke-gray-400 hover:stroke-cyan-500 cursor-pointer"
          />
          <FiTrash2
            size="1rem"
            className="stroke-gray-400 hover:stroke-red-500 cursor-pointer"
          />
        </td>
      </tr>

      <tr className="bg-white dark:bg-black border-t dark:border-gray-600">
        <td className="p-4 font-semibold text-gray-900 dark:text-gray-400">
          Gas
        </td>
        <td className="whitespace-nowrap p-4 font-semibold text-gray-900 dark:text-gray-400">
          200{" "}
          <span className="text-xs text-gray-400 dark:text-gray-500 font-normal">
            BAM
          </span>
        </td>
        <td className="hidden p-4 font-semibold md:table-cell">
          <span className="rounded-full border text-xs font-medium px-3 py-0.5 border-gray-400 bg-gray-50 text-gray-500 dark:border-gray-600 dark:bg-gray-500/10 dark:text-gray-400">
            Expense
          </span>
        </td>
        <td className="hidden p-4 text-gray-500 dark:text-gray-400 sm:flex sm:items-center sm:gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div> Other
        </td>
        <td className="hidden p-4 text-gray-500 dark:text-gray-400 lg:table-cell">
          14 July, 2022
        </td>
        <td className="p-4 text-gray-900 dark:text-gray-400 flex justify-end gap-4">
          <FiEdit2
            size="1rem"
            className="stroke-gray-400 hover:stroke-cyan-500 cursor-pointer"
          />
          <FiTrash2
            size="1rem"
            className="stroke-gray-400 hover:stroke-red-500 cursor-pointer"
          />
        </td>
      </tr>
    </tbody>
  </table>
);

export default Table;
