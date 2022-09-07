import Navbar from "../Navbar";
import Preview from "../Preview";
import Sidenav from "./Sidenav";
import SidenavV2 from "./SidenavV2";
import SidenavWithIcons from "./SidenavWithIcons";
import SidenavWithItemList from "./SidenavWithItemList";

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
      <Preview
        withoutPadding
        component={<SidenavWithIcons />}
        title="Sidenav with icons"
      />
      <Preview
        withoutPadding
        component={<SidenavWithItemList />}
        title="Sidenav with item list"
      />
    </div>
  );
};

export default NavigationPreview;
