import React, { useState } from "react";
import Layout from "../Layout";
import SuccessMessage from "../SuccessMessage";
const Roles = () => {
  const [isSubmitted, setisSubmitted] = useState(false);

  return (
    <div>
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
                      <li className="breadcrumb-item active">Roles</li>
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
                {isSubmitted && (
                  <SuccessMessage message="Role added successfully!" />
                )}
                <div className="row">
                  <div className="col-12">
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">Roles List</h3>
                        <div className="card-tools">
                          <div
                            className="input-group input-group-sm"
                            style={{ width: 150 }}
                          >
                            <input
                              type="text"
                              name="table_search"
                              className="form-control float-right"
                              placeholder="Search"
                            />
                            <div className="input-group-append">
                              <button type="submit" className="btn btn-default">
                                <i className="fas fa-search" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /.card-header */}
                      <div className="card-body table-responsive p-0">
                        <table className="table table-hover text-nowrap">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Role Name</th>
                              <th>Created Date</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>183</td>
                              <td>John Doe</td>
                              <td>11-7-2014</td>
                              <td>
                                <button className="btn btn-danger btn-sm">
                                  Delete
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>219</td>
                              <td>Alexander Pierce</td>
                              <td>11-7-2014</td>
                              <td>
                                <button className="btn btn-danger btn-sm">
                                  Delete
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>657</td>
                              <td>Bob Doe</td>
                              <td>11-7-2014</td>
                              <td>
                                <button className="btn btn-danger btn-sm">
                                  Delete
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.card */}
                  </div>
                </div>
              </div>
              {/* /.container-fluid */}
            </section>
            {/* /.content */}
          </div>
          {/* /.content-wrapper */}
        </Layout>
      </div>
    </div>
  );
};

export default Roles;
