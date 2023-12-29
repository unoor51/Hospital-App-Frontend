import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../admin/Dashboard";
import AddRole from "../admin/roles/AddRole";

function Admin() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addRole" element={<AddRole />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Admin;
