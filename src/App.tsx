import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ThemeLayoutSwitcher from "./layouts/ThemeLayoutSwitcher";

function App() {
  return (
    <Routes>
      <Route element={<ThemeLayoutSwitcher />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
