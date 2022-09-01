import Alert from "../popup/Alert";
import Modal from "../popup/Modal";
import Navbar from "../Navbar";
import Preview from "../Preview";
import Sidenav from "../navigation/Sidenav";
import SidenavV2 from "../navigation/SidenavV2";
import Table from "./Table";

const TablePreview = (): JSX.Element => {
  return (
    <div className="w-full">
      <Preview alignInCenter component={<Table />} title="Table" />
    </div>
  );
};

export default TablePreview;
