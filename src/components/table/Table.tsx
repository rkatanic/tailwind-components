import { FiTrash2, FiEdit2, FiArrowRight, FiArrowLeft } from "react-icons/fi";

const Table = (): JSX.Element => (
  <table className="w-full overflow-hidden rounded-md shadow-sm">
    <tbody className="text-left text-sm border dark:border-zinc-600">
      <th className="p-4 bg-zinc-50 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-300 font-semibold">
        Name
      </th>
      <th className="p-4 bg-zinc-50 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-300 font-semibold">
        Amount
      </th>
      <th className="hidden p-4 bg-zinc-50 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-300 font-semibold md:table-cell">
        Type
      </th>
      <th className="hidden p-4 bg-zinc-50 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-300 font-semibold sm:table-cell">
        Category
      </th>
      <th className="hidden p-4 bg-zinc-50 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-300 font-semibold lg:table-cell">
        Date created
      </th>
      <th className="text-right p-4 bg-zinc-50 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-300 font-semibold">
        Actions
      </th>

      <tr className="bg-white dark:bg-zinc-900 border-t dark:border-zinc-600">
        <td className="p-4 font-semibold text-zinc-900 dark:text-zinc-400">
          Salary
        </td>
        <td className="whitespace-nowrap p-4 font-semibold text-zinc-900 dark:text-zinc-400">
          1.000{" "}
          <span className="text-xs text-zinc-400 dark:text-zinc-500 font-normal">
            BAM
          </span>
        </td>
        <td className="hidden p-4 font-semibold md:table-cell">
          <span className="rounded-full border text-xs font-medium px-2 py-0.5 border-emerald-400 bg-emerald-50 text-emerald-500 dark:border-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
            Income
          </span>
        </td>
        <td className="hidden p-4 text-zinc-500 dark:text-zinc-400 sm:flex sm:items-center sm:gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div> Income
        </td>
        <td className="hidden p-4 text-zinc-500 dark:text-zinc-400 lg:table-cell">
          1 August, 2022
        </td>
        <td className="p-4 text-zinc-900 dark:text-zinc-400 flex justify-end gap-4">
          <FiEdit2
            size="1rem"
            className="stroke-zinc-400 hover:stroke-indigo-500 cursor-pointer"
          />
          <FiTrash2
            size="1rem"
            className="stroke-zinc-400 hover:stroke-red-500 cursor-pointer"
          />
        </td>
      </tr>

      <tr className="bg-white dark:bg-zinc-900 border-t dark:border-zinc-600">
        <td className="p-4 font-semibold text-zinc-900 dark:text-zinc-400">
          Phone bill
        </td>
        <td className="whitespace-nowrap p-4 font-semibold text-zinc-900 dark:text-zinc-400">
          99{" "}
          <span className="text-xs text-zinc-400 dark:text-zinc-500 font-normal">
            BAM
          </span>
        </td>
        <td className="hidden p-4 font-semibold md:table-cell">
          <span className="rounded-full border text-xs font-medium px-2 py-0.5 border-zinc-400 bg-zinc-50 text-zinc-500 dark:border-zinc-600 dark:bg-zinc-500/10 dark:text-zinc-400">
            Expense
          </span>
        </td>
        <td className="hidden p-4 text-zinc-500 dark:text-zinc-400 sm:flex sm:items-center sm:gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div> Telephone
        </td>
        <td className="hidden p-4 text-zinc-500 dark:text-zinc-400 lg:table-cell">
          31 July, 2022
        </td>
        <td className="p-4 text-zinc-900 dark:text-zinc-400 flex justify-end gap-4">
          <FiEdit2
            size="1rem"
            className="stroke-zinc-400 hover:stroke-indigo-500 cursor-pointer"
          />
          <FiTrash2
            size="1rem"
            className="stroke-zinc-400 hover:stroke-red-500 cursor-pointer"
          />
        </td>
      </tr>

      <tr className="bg-white dark:bg-zinc-900 border-t dark:border-zinc-600">
        <td className="p-4 font-semibold text-zinc-900 dark:text-zinc-400">
          Electricity
        </td>
        <td className="whitespace-nowrap p-4 font-semibold text-zinc-900 dark:text-zinc-400">
          175.24{" "}
          <span className="text-xs text-zinc-400 dark:text-zinc-500 font-normal">
            BAM
          </span>
        </td>
        <td className="hidden p-4 font-semibold md:table-cell">
          <span className="rounded-full border text-xs font-medium px-2 py-0.5 border-zinc-400 bg-zinc-50 text-zinc-500 dark:border-zinc-600 dark:bg-zinc-500/10 dark:text-zinc-400">
            Expense
          </span>
        </td>
        <td className="hidden p-4 text-zinc-500 dark:text-zinc-400 sm:flex sm:items-center sm:gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div> Housing
        </td>
        <td className="hidden p-4 text-zinc-500 dark:text-zinc-400 lg:table-cell">
          30 July, 2022
        </td>
        <td className="p-4 text-zinc-900 dark:text-zinc-400 flex justify-end gap-4">
          <FiEdit2
            size="1rem"
            className="stroke-zinc-400 hover:stroke-indigo-500 cursor-pointer"
          />
          <FiTrash2
            size="1rem"
            className="stroke-zinc-400 hover:stroke-red-500 cursor-pointer"
          />
        </td>
      </tr>

      <tr className="bg-white dark:bg-zinc-900 border-t dark:border-zinc-600">
        <td className="p-4 font-semibold text-zinc-900 dark:text-zinc-400">
          Groceries
        </td>
        <td className="whitespace-nowrap p-4 font-semibold text-zinc-900 dark:text-zinc-400">
          392.37{" "}
          <span className="text-xs text-zinc-400 dark:text-zinc-500 font-normal">
            BAM
          </span>
        </td>
        <td className="hidden p-4 font-semibold md:table-cell">
          <span className="rounded-full border text-xs font-medium px-2 py-0.5 border-zinc-400 bg-zinc-50 text-zinc-500 dark:border-zinc-600 dark:bg-zinc-500/10 dark:text-zinc-400">
            Expense
          </span>
        </td>
        <td className="hidden p-4 text-zinc-500 dark:text-zinc-400 sm:flex sm:items-center sm:gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-sky-400"></div> Food &
          Drinks
        </td>
        <td className="hidden p-4 text-zinc-500 dark:text-zinc-400 lg:table-cell">
          25 July, 2022
        </td>
        <td className="p-4 text-zinc-900 dark:text-zinc-400 flex justify-end gap-4">
          <FiEdit2
            size="1rem"
            className="stroke-zinc-400 hover:stroke-indigo-500 cursor-pointer"
          />
          <FiTrash2
            size="1rem"
            className="stroke-zinc-400 hover:stroke-red-500 cursor-pointer"
          />
        </td>
      </tr>

      <tr className="bg-white dark:bg-zinc-900 border-t dark:border-zinc-600">
        <td className="p-4 font-semibold text-zinc-900 dark:text-zinc-400">
          Gas
        </td>
        <td className="whitespace-nowrap p-4 font-semibold text-zinc-900 dark:text-zinc-400">
          200{" "}
          <span className="text-xs text-zinc-400 dark:text-zinc-500 font-normal">
            BAM
          </span>
        </td>
        <td className="hidden p-4 font-semibold md:table-cell">
          <span className="rounded-full border text-xs font-medium px-2 py-0.5 border-zinc-400 bg-zinc-50 text-zinc-500 dark:border-zinc-600 dark:bg-zinc-500/10 dark:text-zinc-400">
            Expense
          </span>
        </td>
        <td className="hidden p-4 text-zinc-500 dark:text-zinc-400 sm:flex sm:items-center sm:gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-400"></div> Other
        </td>
        <td className="hidden p-4 text-zinc-500 dark:text-zinc-400 lg:table-cell">
          14 July, 2022
        </td>
        <td className="p-4 text-zinc-900 dark:text-zinc-400 flex justify-end gap-4">
          <FiEdit2
            size="1rem"
            className="stroke-zinc-400 hover:stroke-indigo-500 cursor-pointer"
          />
          <FiTrash2
            size="1rem"
            className="stroke-zinc-400 hover:stroke-red-500 cursor-pointer"
          />
        </td>
      </tr>
    </tbody>
  </table>
);

export default Table;
