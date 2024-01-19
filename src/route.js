import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import OpenPreventive from "./pages/order/OpenPreventive";
import User from "./pages/user/User";
import Technician from "./pages/technician/Technician";
import Correctives from "./pages/correctives/Correctives";
import CorrectiveInfo from "./pages/correctives/CorrectiveInfo";
import Location from "./pages/Location/Location";
import OpenCorrective from "./pages/order/OpenCorrective";
;


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/abrircorretiva" element={<OpenCorrective />} />
        <Route path="/usuarios" element={<User />} />
        <Route path="/tecnicos" element={<Technician />} />
        <Route path="/corretivas" element={<Correctives />} />
        <Route path="/corretivas/:id" element={<CorrectiveInfo />} />
        <Route path="/abrirpreventiva" element={<OpenPreventive />} />
        <Route path="/locais" element={<Location />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
