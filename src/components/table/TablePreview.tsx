import Preview from "../Preview";
import Table from "./Table";

const TablePreview = (): JSX.Element => (
  <div className="w-full">
    <Preview alignInCenter component={<Table />} title="Table" />
  </div>
);

export default TablePreview;
