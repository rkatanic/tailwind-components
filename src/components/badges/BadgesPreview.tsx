import Preview from "../Preview";
import Badges from "./Badges";

const BadgesPreview = (): JSX.Element => (
  <div className="w-full">
    <Preview alignInCenter component={<Badges />} title="Badges" />
  </div>
);

export default BadgesPreview;
