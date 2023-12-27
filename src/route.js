import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import OpenServiceForm from "./pages/order/OpenServiceForm";
import User from "./pages/user/User";
import Technician from "./pages/technician/Technician";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/solicitacao" element={<OpenServiceForm />} />
        <Route path="/usuarios" element={<User />} />
        <Route path="/tecnicos" element={<Technician />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
