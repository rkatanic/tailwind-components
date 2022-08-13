import { useState } from "react";
import Code from "./Code";
import { FiEye, FiCode } from "react-icons/fi";

interface Props {
  component: JSX.Element | any;
  code?: any;
  title: string;
  alignInCenter?: boolean;
  withoutPadding: boolean;
}

const Preview = ({
  component,
  title,
  code,
  alignInCenter,
  withoutPadding,
}: Props): JSX.Element => {
  const [showCode, setShowCode] = useState(false);
  return (
    <div className="h-full w-full m-auto max-w-7xl z-10">
      <div className="flex gap-4 justify-between  mb-4">
        <h1 className="text-md font-medium text-gray-900 dark:text-gray-300">
          {title}
        </h1>
        <div className=" flex border rounded-md bg-white shadow-sm overflow-hidden dark:bg-gray-900 dark:border-gray-700">
          <button
            className={`${
              !showCode ? "bg-gray-50 dark:bg-gray-800" : ""
            } text-sm py-3 px-4 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800`}
            type="button"
            onClick={() => setShowCode(false)}
          >
            <FiEye
              className={`${
                !showCode
                  ? "stroke-cyan-600 dark:stroke-cyan-500"
                  : "stroke-gray-900 dark:stroke-gray-400"
              }`}
            />
          </button>
          <div className="w-px h-full bg-gray-200 dark:bg-gray-700"></div>
          <button
            className={`${
              showCode ? "bg-gray-50 dark:bg-gray-800" : ""
            } text-sm py-3 px-4 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800`}
            type="button"
            onClick={() => setShowCode(true)}
          >
            <FiCode
              className={`${
                showCode
                  ? "stroke-cyan-600 dark:stroke-cyan-500"
                  : "stroke-gray-900 dark:stroke-gray-400"
              }`}
            />
          </button>
        </div>
      </div>

      {showCode ? (
        <Code component={component} />
      ) : (
        <div
          className={`relative rounded-lg overflow-hidden border border-gray-200 bg-gray-50 dark:bg-gray-900  dark:border-gray-700 ${
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
