import Preview from "../Preview";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import Toggle from "./Toggle";

const CheckboxAndRadio = (): JSX.Element => (
  <div className="w-full">
    <Preview alignInCenter component={<Checkbox />} title="Checkbox" />
    <Preview alignInCenter component={<Radio />} title="Radio" />
    <Preview alignInCenter component={<Toggle />} title="Toggle switch" />
  </div>
);

export default CheckboxAndRadio;
