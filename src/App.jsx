import CheckboxAndRadio from "./components/checkboxandradio/CheckboxAndRadio";
import Header from "./components/Header";
import Input from "./components/input/Input";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Buttons from "./components/buttons/Buttons";
import Navigation from "./components/Navigation";
import NavigationPreview from "./components/navigation/NavigationPreview";
import Popup from "./components/popup/Popup";
import TablePreview from "./components/table/TablePreview";
import Form from "./components/form/Form";
import StatsPreview from "./components/stats/StatsPreview";
import BadgesPreview from "./components/badges/BadgesPreview";

const App = () => (
  <div className={`App relative dark:bg-black bg-white`}>
    <Header />
    <div className="flex h-full items-baseline gap-8 w-full max-w-7xl m-auto">
      <Router>
        <Navigation />

        <Routes>
          <Route path="/navigation" element={<NavigationPreview />} />
          <Route path="/button" element={<Buttons />} />
          <Route path="/input" element={<Input />} />
          <Route path="/checkbox-and-radio" element={<CheckboxAndRadio />} />
          <Route path="/popup" element={<Popup />} />
          <Route path="/table" element={<TablePreview />} />
          <Route path="/form" element={<Form />} />
          <Route path="/badges" element={<BadgesPreview />} />
          <Route path="/stats" element={<StatsPreview />} />
        </Routes>
      </Router>
    </div>
  </div>
);

export default App;
