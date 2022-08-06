const CheckboxAndRadio = (): JSX.Element => {
  return (
    <div className="flex gap-8">
      <div className="flex flex-col gap-4">
        <div className="flex items-center">
          <input
            checked
            id="radio-option-one"
            name="radio-options"
            type="radio"
            className="cursor-pointer focus:ring-0 h-4 w-4 text-teal-600 border-gray-300"
          />
          <label
            htmlFor="radio-option-one"
            className=" cursor-pointer ml-2 block text-sm font-medium text-gray-900"
          >
            Checked
          </label>
        </div>

        <div className="flex items-center">
          <input
            id="radio-option-two"
            name="radio-options"
            type="radio"
            className="cursor-pointer focus:ring-0 h-4 w-4 text-teal-600 border-gray-300"
          />
          <label
            htmlFor="radio-option-two"
            className="cursor-pointer ml-2 block text-sm font-medium text-gray-900"
          >
            Active
          </label>
        </div>
        <div className="flex items-center">
          <input
            disabled
            id="radio-option-three"
            name="radio-options"
            type="radio"
            className="cursor-pointer focus:ring-0 h-4 w-4 text-teal-600 border-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
          <label
            htmlFor="radio-option-three"
            className="cursor-pointer ml-2 block text-sm font-medium text-gray-900"
          >
            Disabled
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center ">
          <input
            checked
            id="checkbox-one"
            name="checkbox-one"
            type="checkbox"
            className="cursor-pointer focus:ring-0 h-4 w-4 text-teal-600 border-gray-300 rounded"
          />
          <label
            htmlFor="checkbox-one"
            className="cursor-pointer  ml-2 text-sm font-medium text-gray-900"
          >
            Checked
          </label>
        </div>
        <div className="flex items-center ">
          <input
            id="checkbox-two"
            name="checkbox-two"
            type="checkbox"
            className="cursor-pointer focus:ring-0 h-4 w-4 text-teal-600 border-gray-300 rounded"
          />
          <label
            htmlFor="checkbox-two"
            className="cursor-pointer  ml-2 text-sm font-medium text-gray-900"
          >
            Active
          </label>
        </div>
        <div className="flex items-center ">
          <input
            disabled
            id="checkbox-disabled"
            name="checkbox-disabled"
            type="checkbox"
            className="cursor-pointer focus:ring-0 h-4 w-4 text-teal-600 border-gray-300 rounded disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
          <label
            aria-disabled
            htmlFor="checkbox-disabled"
            className="cursor-pointer  ml-2 text-sm font-medium text-gray-900"
          >
            Disabled
          </label>
        </div>
      </div>
    </div>
  );
};

export default CheckboxAndRadio;
