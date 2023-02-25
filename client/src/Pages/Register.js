import React, { useState } from "react";
import Navbar from "../components/Navbar";

function Register() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [msg, setmsg] = useState("");

  async function registerUser(e) {
    e.preventDefault();

    const api_data = await fetch("/api/register/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: Name,
        email: Email,
        password: Password,
      }),
    });
    const data = await api_data.json();
    // console.log(data);
    setmsg(data.msg);
  }

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-6 col-md-8 col-sm-10">
            <div className="card mt-5">
              <div className="card-body">
                <h2 className="text-center mb-4">Register</h2>
                <hr />
                <div
                  className={`alert alert-success alert-dismissible fade show ${
                    msg ? "" : "visually-hidden"
                  }`}
                  role="alert"
                >
                  {msg}
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
                <form>
                  <div className="form-group">
                    <label htmlFor="email">Your Name:</label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      id="name"
                      placeholder="Enter Name"
                      value={Name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="email">Email address:</label>
                    <input
                      type="email"
                      className="form-control mt-1"
                      id="email"
                      placeholder="Enter email"
                      value={Email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      className="form-control mt-1"
                      id="password"
                      placeholder="Password"
                      value={Password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className="d-flex justify-content-center">
                    <button
                      type="submit"
                      className="btn btn-primary mt-4"
                      onClick={(e) => registerUser(e)}
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
                <p className="text-center mt-3">
                  Already have an account? <a href="/login">Login</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 



      <div>
        <h1>REGISTER PAGE</h1>
        <h3>{msg}</h3>
        <form>
          <input
            type="text"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
          />
          <br />
          <br />
          <input
            type="text"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
          />
          <br />
          <br />
          <input
            type="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Set Password"
          />
          <hr />
          <input
            type="submit"
            value="Register"
            onClick={(e) => registerUser(e)}
          />
        </form>
        <a href="/login">Login</a>

      </div> */}
    </>
  );
}

export default Register;
