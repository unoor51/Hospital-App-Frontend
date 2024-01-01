import React, { useState } from "react";
import Layout from "../Layout";
import SuccessMessage from "../SuccessMessage";

function AddRole() {
  const [formData, setFormData] = useState({
    // Initialize form fields and their initial values
    roleName: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e) => {
    // Update form data as the user types
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to a server)

    try {
      const response = await fetch("http://127.0.0.1:8000/api/roles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          role_name: formData.roleName,
          // Add other fields as needed
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // console.log(data.role + " Role created successfully");
        // Handle success, e.g., show a success message or redirect
        setIsSubmitted(true);
      } else {
        console.error(
          "Failed to create role:",
          response.status,
          response.statusText
        );
        // Handle error, e.g., show an error message to the user
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle other errors, e.g., network issues
    }
  };

  return (
    <div>
      <Layout>
        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0">Add Role</h1>
                </div>
                {/* /.col */}
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Add Role</li>
                  </ol>
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </div>
          {/* /.content-header */}
          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              {console.log(isSubmitted)}
              {isSubmitted && (
                <SuccessMessage message="Role added successfully!" />
              )}
              {/* Small boxes (Stat box) */}
              <div className="row">
                <div className="col-md-12">
                  {/* general form elements */}
                  <div className="card card-default">
                    {/* form start */}
                    <form onSubmit={handleSubmit}>
                      <div className="card-body">
                        <div className="form-group">
                          <label htmlFor="roleName">Role Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="roleName"
                            name="roleName"
                            placeholder="Enter Role Name"
                            value={formData.roleName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      {/* /.card-body */}
                      <div className="card-footer">
                        <button type="submit" className="btn btn-primary">
                          Add
                        </button>
                      </div>
                    </form>
                  </div>
                  {/* /.card */}
                </div>
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </section>
          {/* /.content */}
        </div>
        {/* /.content-wrapper */}
      </Layout>
    </div>
  );
}

export default AddRole;
