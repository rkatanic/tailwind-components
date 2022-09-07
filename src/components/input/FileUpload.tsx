import { FiUploadCloud } from "react-icons/fi";

const FileUpload = (): JSX.Element => (
  <div className="w-full flex flex-col items-center text-center px-3 py-8 rounded-md border-2 hover:bg-gray-50 dark:hover:bg-gray-900 border-gray-200 border-dashed dark:border-gray-700">
    <FiUploadCloud
      size="2rem"
      className="stroke-1 stroke-gray-300 mb-2 dark:stroke-gray-400"
    />
    <label
      htmlFor="file-upload"
      className="cursor-pointer text-cyan-500 font-medium dark:text-cyan-400"
    >
      Upload a file
      <span className="font-normal text-gray-300 dark:text-gray-400">
        {" "}
        or drag and drop
      </span>
      <p className="font-normal text-gray-300 text-sm mt-1 dark:text-gray-400">
        PNG, JPG, PBM, BMP up to 5MB
      </p>
    </label>

    <input
      className="sr-only"
      id="file-upload"
      name="file-upload"
      type="file"
    />
  </div>
);

export default FileUpload;
