import { BrowserRouter, Routes, Route } from "react-router-dom";
import Class5 from "./Pages/Class5";
import Class6 from "./Pages/Class6";
import Class7 from "./Pages/Class7";
import Class8 from "./Pages/Class8";
import Home from "./Pages/Home";
import Practice from "./Pages/Practice";
import { useEffect } from "react";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/class-5" element={<Class5 />} />
        <Route path="/class-6" element={<Class6 />} />
        <Route path="/class-7" element={<Class7 />} />
        <Route path="/class-8" element={<Class8 />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
