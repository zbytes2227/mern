import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Login() {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [msg, setmsg] = useState("");

  async function loginUser(e) {
    e.preventDefault();

    const api_data = await fetch("/api/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: Email,
        password: Password,
      }),
    });

    const data = await api_data.json();
    // console.log(data);
    setmsg(data.msg);
    if (data.success) {
      navigate("/");
    }
  }

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-6 col-md-8 col-sm-10">
            <div className="card mt-5">
              <div className="card-body">
                <h2 className="text-center mb-4">Login</h2>
                <hr />
                <div
                  className={`alert alert-danger alert-dismissible fade show ${
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
                      onClick={(e) => loginUser(e)}
                    >
                      Login
                    </button>
                  </div>
                </form>
                <p className="text-center mt-3">
                  Don't have an account? <a href="/register">Register</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
