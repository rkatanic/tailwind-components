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
        <h1 className="text-sm text-gray-800 dark:text-gray-200">{title}</h1>
        <div className="flex border rounded-md bg-white overflow-hidden dark:bg-black dark:border-gray-700">
          <button
            className={`text-sm py-2 px-3 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-black`}
            type="button"
            onClick={() => setShowCode(false)}
          >
            <FiEye
              size="1rem"
              className={`${
                !showCode
                  ? "stroke-cyan-500"
                  : "stroke-gray-500 dark:stroke-gray-400"
              }`}
            />
          </button>
          <button
            className={`border-l text-sm py-2 px-3 flex items-center justify-center hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-black`}
            type="button"
            onClick={() => setShowCode(true)}
          >
            <FiCode
              className={`${
                showCode
                  ? "stroke-cyan-600 dark:stroke-cyan-400"
                  : "stroke-gray-500 dark:stroke-gray-400"
              }`}
            />
          </button>
        </div>
      </div>

      {showCode ? (
        <Code component={component} />
      ) : (
        <div
          className={`relative rounded-md overflow-hidden border dark:border-gray-700 ${
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
