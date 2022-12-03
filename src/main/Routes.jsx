import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../components/home/Home";
import UserCrud from "../components/user/UserCrud";

<<<<<<< HEAD
const HandleRoutes = (props) => {
=======
const HandleRoutes = () => {
>>>>>>> 5714ee5777f8137f27e94c8e13380ea92bdb75e5
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/users" element={<UserCrud />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default HandleRoutes;
