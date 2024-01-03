import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    // Initialize form fields and their initial values
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    // Update form data as the user types
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="register-box">
        <div className="register-logo">
          <a href="../../index2.html">
            <b>Admin</b>LTE
          </a>
        </div>
        <div className="card">
          <div className="card-body register-card-body">
            <p className="login-box-msg">Register a new user</p>
            <form method="post" onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full name"
                  name="name"
                  id="name"
                  onChange={handleChange}
                  value={formData.name}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  value={formData.email}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  value={formData.password}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Retype password"
                  name="confirm_password"
                  id="confirm_password"
                  onChange={handleChange}
                  value={formData.confirm_password}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-4 text-center">
                  <button type="submit" className="btn btn-primary btn-block">
                    Register
                  </button>
                </div>
                {/* /.col */}
              </div>
            </form>
            <br />
            <NavLink to="/login" className="text-center">
              I already have a membership
            </NavLink>
          </div>
          {/* /.form-box */}
        </div>
        {/* /.card */}
      </div>
    </div>
  );
};

export default Register;
