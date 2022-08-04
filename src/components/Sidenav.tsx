import {
  FiEdit2,
  FiEye,
  FiDownload,
  FiXCircle,
  FiTrash2,
} from "react-icons/fi";

const Sidenav = (): JSX.Element => {
  return (
    <div className="flex bg-gray-50">
      <div className="w-20 bg-teal-600 flex flex-col items-center gap-12 ">
        <div className="flex items-center justify-center h-16 bg-teal-700 w-full">
          logo
        </div>
        <FiEdit2 size="1.5rem" className="stroke-teal-100" />
        <FiEye size="1.5rem" className="stroke-teal-100" />
        <FiDownload size="1.5rem" className="stroke-teal-100" />
        <FiXCircle size="1.5rem" className="stroke-teal-100" />
      </div>

      <div className="shadow-sm border-r bg-white">
        <div className="border-b h-16 flex items-center px-8 text-lg font-semibold">
          Notes
        </div>
        <div className="w-96 border-b px-8 py-4 bg-gray-50">
          <h3 className="mb-2 font-medium flex items-center gap-2 justify-between">
            Note one
            <FiTrash2
              size="1.125rem"
              className="stroke-gray-300 hover:stroke-rose-500 hover:cursor-pointer"
            />
          </h3>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            quas, neque dolore commodi perspiciatis magni.
          </p>
        </div>

        <div className="w-96 border-b px-8 py-4">
          <h3 className="mb-2 font-medium flex items-center gap-2 justify-between">
            Note two
            <FiTrash2
              size="1.125rem"
              className="stroke-gray-300 hover:stroke-rose-500 hover:cursor-pointer"
            />
          </h3>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            quas, neque dolore commodi perspiciatis magni.
          </p>
        </div>

        <div className="w-96 border-b px-8 py-4">
          <h3 className="mb-2 font-medium flex items-center gap-2 justify-between">
            Note three
            <FiTrash2
              size="1.125rem"
              className="stroke-gray-300 hover:stroke-rose-500 hover:cursor-pointer"
            />
          </h3>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            quas, neque dolore commodi perspiciatis magni.
          </p>
        </div>

        <div className="w-96 border-b px-8 py-4">
          <h3 className="mb-2 font-medium flex items-center gap-2 justify-between">
            Note four
            <FiTrash2
              size="1.125rem"
              className="stroke-gray-300 hover:stroke-rose-500 hover:cursor-pointer"
            />
          </h3>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            quas, neque dolore commodi perspiciatis magni.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
