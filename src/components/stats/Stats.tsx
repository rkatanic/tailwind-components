import { TbScale } from "react-icons/tb";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";

const Stats = (): JSX.Element => (
  <div className="w-full flex gap-4 flex-wrap">
    <div className="shadow-sm rounded flex-1 flex flex-col gap-6 border p-6 dark:border-zinc-800 dark:bg-zinc-800">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-300/20 dark:bg-teal-500/10">
          <HiTrendingUp size="1.25rem" className="fill-teal-500" />
        </div>
        <div className="font-semibold text-zinc-500 dark:text-zinc-200">
          Income
        </div>
      </div>
      <div className="flex gap-2 items-baseline">
        <div className="font-bold text-3xl dark:text-zinc-100">1000</div>
        <span className="text-md text-zinc-300 font-medium dark:text-zinc-400">
          BAM
        </span>
      </div>
      <div className="text-sm font-semibold text-zinc-400 dark:text-zinc-300">
        1 Transaction
      </div>
    </div>

    <div className="shadow-sm rounded flex-1 flex flex-col gap-6 border p-6 dark:border-zinc-800 dark:bg-zinc-800">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-300/20 dark:bg-red-500/10">
          <HiTrendingDown size="1.25rem" className="fill-red-500" />
        </div>
        <div className="font-semibold text-zinc-500 dark:text-zinc-200">
          Expense
        </div>
      </div>
      <div className="flex gap-2 items-baseline">
        <div className="font-bold text-3xl dark:text-zinc-100">300</div>
        <span className="text-md text-zinc-300 font-medium dark:text-zinc-400">
          BAM
        </span>
      </div>
      <div className="text-sm font-semibold text-zinc-400 dark:text-zinc-300">
        4 Transactions
      </div>
    </div>

    <div className="shadow-sm rounded flex-1 flex flex-col gap-6 border p-6 dark:border-zinc-800 dark:bg-zinc-800">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-300/20 dark:bg-cyan-500/10">
          <TbScale size="1.25rem" className="stroke-cyan-500" />
        </div>
        <div className="font-semibold text-zinc-500 dark:text-zinc-200">
          Available balance
        </div>
      </div>
      <div className="flex gap-2 items-baseline">
        <div className="font-bold text-3xl dark:text-zinc-100">700</div>
        <span className="text-md text-zinc-300 font-medium dark:text-zinc-400">
          BAM
        </span>
      </div>
      <div className="text-sm font-semibold text-zinc-400 dark:text-zinc-300">
        70% Remaining
      </div>
    </div>
  </div>
);

export default Stats;
