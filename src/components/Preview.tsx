import { useState } from "react";
import Code from "./Code";
import { FiEye, FiCode } from "react-icons/fi";

interface Props {
  component: JSX.Element | any;
  title: string;
  alignInCenter?: boolean;
  withoutPadding?: boolean;
}

const Preview = ({
  component,
  title,
  alignInCenter,
  withoutPadding,
}: Props): JSX.Element => {
  const [showCode, setShowCode] = useState(false);
  return (
    <div className="mb-8 w-full m-auto max-w-7xl z-10">
      <div className="flex items-end gap-4 justify-between mb-4">
        <h1 className="text-sm font-medium text-zinc-800 dark:text-zinc-300">
          {title}
        </h1>
        <div className="flex border rounded-md bg-white shadow-sm overflow-hidden dark:bg-zinc-700 dark:border-zinc-500">
          <button
            className={`${
              !showCode ? "bg-zinc-50 dark:bg-indigo-500" : ""
            } text-sm py-2 px-4 flex items-center justify-center hover:bg-zinc-50 dark:hover:bg-zinc-900`}
            type="button"
            onClick={() => setShowCode(false)}
          >
            <FiEye
              className={`${
                !showCode
                  ? "stroke-black dark:stroke-white"
                  : "stroke-zinc-800 dark:stroke-zinc-400"
              }`}
            />
          </button>
          <div className="w-px h-full bg-zinc-200 dark:bg-zinc-500"></div>
          <button
            className={`${
              showCode ? "bg-zinc-50 dark:bg-zinc-900" : ""
            } text-sm py-2 px-4 flex items-center justify-center hover:bg-zinc-50 dark:hover:bg-zinc-900`}
            type="button"
            onClick={() => setShowCode(true)}
          >
            <FiCode
              className={`${
                showCode
                  ? "stroke-emerald-600 dark:stroke-emerald-400"
                  : "stroke-zinc-800 dark:stroke-zinc-400"
              }`}
            />
          </button>
        </div>
      </div>

      {showCode ? (
        <Code component={component} />
      ) : (
        <div
          className={`relative rounded-lg overflow-hidden border border-zinc-200 bg-zinc-50 dark:bg-zinc-900  dark:border-zinc-600 ${
            withoutPadding ? "" : "p-10"
          }  ${alignInCenter ? "flex justify-center items-center" : ""}`}
        >
          {component}
        </div>
      )}
    </div>
  );
};

export default Preview;
