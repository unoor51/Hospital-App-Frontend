import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../admin/Dashboard";
import AddRole from "../admin/roles/AddRole";
import Roles from "../admin/roles/Roles";

function Admin() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addRole" element={<AddRole />} />
        <Route path="/roles" element={<Roles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Admin;
