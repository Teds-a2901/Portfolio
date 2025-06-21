import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Applayout from "./ui/Applayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Applayout />}>
          <Route index element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<></>} />
          <Route path="/about" element={<></>} />
          <Route path="/skill" element={<></>} />
          <Route path="/project" element={<></>} />
          <Route path="/contact" element={<></>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
