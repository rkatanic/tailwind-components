import Preview from "../Preview";
import SideOverlay from "./SideOverlay";

const Form = (): JSX.Element => (
  <div className="w-full">
    <Preview
      withoutPadding
      component={<SideOverlay />}
      title="Side ovelay form"
    />
  </div>
);

export default Form;
