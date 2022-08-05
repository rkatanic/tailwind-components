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

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode((prevState) => !prevState);
  };

  return (
    <div className={`App py-8 bg-white ${darkMode ? "dark" : ""}`}>
      <div className="flex flex-col gap-8">
        <Preview component={<Navbar />} title="Dark navbar" />
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
      </div>
    </div>
  );
};

export default App;
