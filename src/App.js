import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
//import Auth from "./components/AuthComponent";
import QR from "./pages/QR";
import Apiarys from "./pages/Apiarys";
import Hives from "./pages/Hives";
import Hive from "./pages/Hive";
import PrivateRoutes from "./PrivateRoutes";
import NavBar from "./components/NavBar";

export const URL = process.env.REACT_APP_SERVER_URL;

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar className="h-screen overflow-y-scroll " />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/apiarys" element={<Apiarys />} />
              <Route path="/apiarys/:slug" element={<Hives />} />
              <Route path="/apiarys/:apiary/:slug" element={<Hive />} />
              <Route path="/qrscan" element={<QR />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
