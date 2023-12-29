import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faDashboard,
  faSearch,
  faTasksAlt,
  faUser,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function SideNav() {
  return (
    <div>
      {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="index3.html" className="brand-link">
          <img
            src="dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">AdminLTE 3</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                Alexander Pierce
              </a>
            </div>
          </div>
          {/* SidebarSearch Form */}
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input
                className="form-control form-control-sidebar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <FontAwesomeIcon icon={faSearch} color="white" />
                </button>
              </div>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
                with font-awesome or any other icon font library */}
              {/* <Link to="/">Home</Link> */}

              <li className="nav-item menu-open">
                <NavLink to="/dashboard" className="nav-link active">
                  <FontAwesomeIcon icon={faDashboard} className="nav-icon" />
                  <p>Dashboard</p>
                </NavLink>
              </li>
              {/* Roles Management */}
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <FontAwesomeIcon icon={faTasksAlt} className="nav-icon" />
                  <p>
                    Roles
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Roles List</p>
                    </a>
                  </li>
                  <NavLink to="/addRole" className="nav-link active">
                    <i className="far fa-circle nav-icon" />
                    <p>Add Role</p>
                  </NavLink>
                  {/* <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Add Role</p>
                    </a>
                  </li> */}
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Permissions</p>
                    </a>
                  </li>
                </ul>
              </li>
              {/* Doctor Management */}
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <FontAwesomeIcon icon={faUserDoctor} className="nav-icon" />
                  <p>
                    Doctors
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Doctors List</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Add Doctor</p>
                    </a>
                  </li>
                </ul>
              </li>
              {/* Patient Management */}
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <FontAwesomeIcon icon={faUser} className="nav-icon" />
                  <p>
                    Patients
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Patients List</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Add Patient</p>
                    </a>
                  </li>
                </ul>
              </li>
              {/* Appointments */}
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <FontAwesomeIcon icon={faCalendar} className="nav-icon" />
                  <p>
                    Appointments
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Appointments List</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Add Appointment</p>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
  );
}

export default SideNav;
