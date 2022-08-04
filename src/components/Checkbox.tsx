const Checkbox = (): JSX.Element => {
  return (
    <div className="flex gap-2">
      <input
        id="checkbox-1"
        name="checkbox-1"
        type="checkbox"
        className="cursor-pointer bg-teal-500 checked:bg-teal-500"
      />
      <label
        htmlFor="checkbox-1"
        className="cursor-pointer text-sm text-gray-900"
      >
        Option one
      </label>
    </div>
  );
};

export default Checkbox;
