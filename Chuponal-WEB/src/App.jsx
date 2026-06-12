import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/home";
import InformacionWeb from "./page/InfoWeb/info";  

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<InformacionWeb />} />
      </Routes>
    </BrowserRouter>
  );
}