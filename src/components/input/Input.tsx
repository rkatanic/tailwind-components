import Preview from "../Preview";
import FileUpload from "./FileUpload";
import InputDatePicker from "./InputDatePicker";
import InputField from "./InputField";
import InputFieldWithError from "./InputFieldWithError";
import InputWithLeadingIcon from "./InputWithLeadingIcon";
import Select from "./Select";
import Textarea from "./Textarea";

const Input = (): JSX.Element => {
  return (
    <div className="w-full">
      <Preview alignInCenter component={<InputField />} title="Input field" />
      <Preview
        alignInCenter
        component={<InputFieldWithError />}
        title="Input field with error"
      />
      <Preview
        alignInCenter
        component={<InputWithLeadingIcon />}
        title="Input field with leading icon"
      />
      <Preview
        alignInCenter
        component={<InputDatePicker />}
        title="Datepicker"
      />
      <Preview alignInCenter component={<Textarea />} title="Textarea" />
      <Preview alignInCenter component={<Select />} title="Select" />
      <Preview alignInCenter component={<FileUpload />} title="File upload" />
    </div>
  );
};

export default Input;
