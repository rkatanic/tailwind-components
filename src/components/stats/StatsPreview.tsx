import Preview from "../Preview";
import Stats from "./Stats";

const StatsPreview = (): JSX.Element => (
  <div className="w-full">
    <Preview alignInCenter component={<Stats />} title="Stats" />
  </div>
);

export default StatsPreview;
