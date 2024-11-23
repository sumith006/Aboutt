import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom"; import App from "./App";
import About from "./About";
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
    </Routes>
  </BrowserRouter>, document.getElementById("root")
); 