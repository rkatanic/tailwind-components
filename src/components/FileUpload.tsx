import { FiUploadCloud } from "react-icons/fi";

const FileUpload = (): JSX.Element => (
  <div className="w-full flex flex-col items-center text-center px-4 py-8 rounded-md border-2 border-gray-300 border-dashed hover:bg-gray-50 dark:bg-gray-700/20 dark:border-gray-700 dark:hover:bg-gray-700/30 dark:shadow-md">
    <FiUploadCloud size="2.5rem" className="stroke-1 stroke-gray-400" />
    <label
      htmlFor="file-upload"
      className="cursor-pointer text-cyan-600 font-medium dark:text-cyan-500"
    >
      Upload a file
      <span className="font-normal text-gray-500"> or drag and drop</span>
      <p className="font-normal text-gray-500 text-sm mt-1 dark:text-gray-500">
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
