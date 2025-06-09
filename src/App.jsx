import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HeroPage from "./pages/HeroPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero/:id" element={<HeroPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
