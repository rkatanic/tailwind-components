import Navbar from "../Navbar";
import Preview from "../Preview";
import Sidenav from "./Sidenav";
import SidenavV2 from "./SidenavV2";

const NavigationPreview = (): JSX.Element => {
  return (
    <div className="w-full">
      <Preview withoutPadding component={<Navbar />} title="Navbar" />
      <Preview withoutPadding component={<Sidenav />} title="Sidenav" />
      <Preview
        withoutPadding
        component={<SidenavV2 />}
        title="Sidenav version 2"
      />
    </div>
  );
};

export default NavigationPreview;
