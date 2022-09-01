import { TbScale } from "react-icons/tb";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";

const Stats = (): JSX.Element => (
  <div className="w-full flex gap-4 flex-wrap">
    <div className="flex-1 border bg-white rounded-md shadow-sm dark:bg-zinc-800 dark:border-zinc-900">
      <div className="flex items-center gap-4 mb-2 p-4">
        <div className="w-12 h-12 bg-gradient-to-b from-emerald-400 to-teal-500 rounded-md flex items-center justify-center dark:from-emerald-600 dark:to-teal-700">
          <FiTrendingUp size="1.25rem" className="stroke-white" />
        </div>
        <div>
          <h3 className="text-emerald-500">Income</h3>
          <h1 className="text-2xl font-bold dark:text-zinc-200 whitespace-nowrap">
            1.000{" "}
            <span className="text-sm text-zinc-400 font-normal dark:text-zinc-500">
              BAM
            </span>
          </h1>
        </div>
      </div>
      <div className="bg-zinc-50 p-4 font-medium text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
        <span>1 </span>
        <span className="text-sm">Transaction</span>
      </div>
    </div>

    <div className="flex-1 border bg-white rounded-md shadow-sm dark:bg-zinc-800 dark:border-zinc-900">
      <div className="flex items-center gap-4 mb-2 p-4">
        <div className="w-12 h-12 bg-gradient-to-b from-red-400 to-rose-500 rounded-md flex items-center justify-center dark:from-red-600 dark:to-rose-700">
          <FiTrendingDown size="1.25rem" className="stroke-white" />
        </div>
        <div>
          <h3 className="text-rose-500">Expense</h3>
          <h1 className="text-2xl font-bold dark:text-zinc-200 whitespace-nowrap">
            700{" "}
            <span className="text-sm text-zinc-400 font-normal dark:text-zinc-500">
              BAM
            </span>
          </h1>
        </div>
      </div>
      <div className="bg-zinc-50 p-4 font-medium text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
        <span>4 </span>
        <span className="text-sm">Transactions</span>
      </div>
    </div>

    <div className="flex-1 border bg-white rounded-md shadow-sm dark:bg-zinc-800 dark:border-zinc-900">
      <div className="flex items-center gap-4 mb-2 p-4">
        <div className="w-12 h-12 bg-gradient-to-b from-slate-400 to-zinc-500 rounded-md flex items-center justify-center dark:from-slate-600 dark:to-gray-700">
          <TbScale size="1.25rem" className="stroke-white" />
        </div>
        <div>
          <h3 className="text-slate-500 whitespace-nowrap">
            Available balance
          </h3>
          <h1 className="text-2xl font-bold dark:text-zinc-200 whitespace-nowrap">
            300{" "}
            <span className="text-sm text-zinc-400 font-normal dark:text-zinc-500">
              BAM
            </span>
          </h1>
        </div>
      </div>
      <div className="bg-zinc-50 p-4 font-medium text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
        <span>30% </span>
        <span className="text-sm">Remaining</span>
      </div>
    </div>
  </div>
);

export default Stats;
