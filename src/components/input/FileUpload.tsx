import { FiUploadCloud } from "react-icons/fi";

const FileUpload = (): JSX.Element => (
  <div className="w-full flex flex-col items-center text-center px-4 py-8 rounded-md border-2 bg-white border-zinc-200 border-dashed dark:bg-zinc-900 dark:border-zinc-600">
    <FiUploadCloud size="2rem" className="stroke-1 stroke-zinc-400 mb-2" />
    <label
      htmlFor="file-upload"
      className="cursor-pointer text-indigo-600 font-medium dark:text-indigo-400"
    >
      Upload a file
      <span className="font-normal text-zinc-500 dark:text-zinc-300">
        {" "}
        or drag and drop
      </span>
      <p className="font-normal text-zinc-500 text-sm mt-1 dark:text-zinc-300">
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
