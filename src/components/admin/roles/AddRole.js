import React from "react";
import Layout from "../Layout";

function AddRole() {
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
              {/* Small boxes (Stat box) */}
              <div className="row"></div>
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
