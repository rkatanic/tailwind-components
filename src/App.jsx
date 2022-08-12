import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import CheckboxAndRadio from "./components/CheckboxAndRadio";
import Divider from "./components/Divider";
import FileUpload from "./components/FileUpload";
import Input from "./components/Input";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Preview from "./components/Preview";
import Select from "./components/Select";
import Sidenav from "./components/Sidenav";
import SideOverlay from "./components/SideOverlay";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    // setDarkMode((prevState) => !prevState);
    if (document.body.classList.contains("dark")) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  };

  return (
    <div
      className={`App dark:bg-gray-900 py-8 bg-white ${darkMode ? "dark" : ""}`}
    >
      <button onClick={handleDarkModeToggle}>toggle dark mode</button>
      <div className="flex flex-col gap-16">
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
      </div>
    </div>
  );
};

export default App;
