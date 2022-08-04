import { useState } from "react";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import FileUpload from "./components/FileUpload";
import Input from "./components/Input";
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
        <Preview alignInCenter component={<Checkbox />} title="Checkbox" />
        <Preview
          component={<Sidenav />}
          title="Sidenav with actions and item list"
        />
      </div>
    </div>
  );
};

export default App;
