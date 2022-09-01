import ButtonDanger from "./ButtonDanger";
import ButtonOutline from "./ButtonOutline";
import ButtonPrimary from "./ButtonPrimary";
import Preview from "../Preview";

const Buttons = (): JSX.Element => {
  return (
    <div className="w-full">
      <Preview
        alignInCenter
        component={<ButtonPrimary />}
        title="Primary button"
      />
      <Preview
        alignInCenter
        component={<ButtonDanger />}
        title="Danger button"
      />
      <Preview
        alignInCenter
        component={<ButtonOutline />}
        title="Outline button"
      />
    </div>
  );
};

export default Buttons;
