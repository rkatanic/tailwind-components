import Alert from "./Alert";
import Modal from "./Modal";
import Preview from "../Preview";

const Popup = (): JSX.Element => (
  <div className="w-full">
    <Preview alignInCenter component={<Modal />} title="Modal" />
    <Preview alignInCenter component={<Alert />} title="Alert" />
  </div>
);

export default Popup;
