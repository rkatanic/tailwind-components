import Alert from "./components/Alert";
import Button from "./components/Button";
import CheckboxAndRadio from "./components/CheckboxAndRadio";
import Divider from "./components/Divider";
import FileUpload from "./components/FileUpload";
import Header from "./components/Header";
import Input from "./components/Input";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Preview from "./components/Preview";
import Select from "./components/Select";
import Sidenav from "./components/Sidenav";
import SideOverlay from "./components/SideOverlay";
import Stats from "./components/Stats";
import Table from "./components/Table";

const App = () => (
  <>
    <div
      className={`App overflow-hidden relative dark:bg-zinc-900 py-8 bg-white`}
    >
      <div className="flex flex-col gap-16">
        <Header />
        <Preview withoutPadding component={<Navbar />} title="Dark navbar" />
        <Preview alignInCenter component={<Input />} title="Input field" />
        <Preview alignInCenter component={<Button />} title="Buttons" />
        <Preview alignInCenter component={<FileUpload />} title="File upload" />
        <Preview alignInCenter component={<Select />} title="Select" />
        <Preview
          alignInCenter
          component={<CheckboxAndRadio />}
          title="Checkbox & radio"
        />
        <Preview
          component={<Sidenav />}
          withoutPadding
          title="Sidenav with actions and item list"
        />
        <Preview
          alignInCenter
          component={<Divider />}
          title="Divider with text"
        />
        <Preview
          alignInCenter
          component={<Modal />}
          title="Simple delete confirmation modal"
        />
        <Preview alignInCenter component={<Alert />} title="Alerts" />
        <Preview
          withoutPadding
          component={<SideOverlay />}
          title="Side overlay"
        />
        <Preview component={<Table />} title="Table" />
        <Preview component={<Stats />} title="Stats overview cards" />
      </div>
    </div>
    <div className="fixed inset-0 [mask-image:linear-gradient(to_bottom_right,white,transparent,white)]">
      <svg className="h-full w-full absolute inset-0">
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <rect width="40" height="40" fill="url(#tenthGrid)" />
            <path
              d="M 100 0 L 0 0 0 100"
              fill="none"
              className="stroke-zinc-200 dark:stroke-zinc-800"
              stroke-width="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  </>
);

export default App;
