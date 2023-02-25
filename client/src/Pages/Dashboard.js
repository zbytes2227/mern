import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Dashboard() {
  const [userName, setuserName] = useState("");
  const navigate = useNavigate();
  async function dashboard() {
    const api_data = await fetch("/api/dashboard", {
      method: "POST",
    });
    const data = await api_data.json();
    if (!data.user_valid) {
      navigate("/login");
    }
    // console.log(data);
  }

  async function getUserData() {
    const api_data = await fetch("/api/user/", {
      method: "POST",
    });
    const data = await api_data.json();
    setuserName(data.name);
  }

  useEffect(() => {
    dashboard();
    getUserData();
  });

  async function logoutUser(e) {
    e.preventDefault();
    const api_data = await fetch("/api/logout", {
      method: "POST",
    });
    const data = await api_data.json();
    console.log(data);
    navigate("/");
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-6 col-md-8 col-sm-10">
            <div className="card mt-5">
              <div className="card-body">
                <h1 className="text-center mb-2">Dashboard</h1>
                <p className="text-center ">
                  Welcome Back Dear, <strong>{userName}</strong>
                </p>
                <hr />
                <form>
                  <div className="d-flex justify-content-center">
                    <button
                      type="submit"
                      className="btn btn-danger mt-4"
                      onClick={(e) => logoutUser(e)}
                    >
                      Logout
                    </button>
                  </div>
                  <p className="text-center mt-3">This project is a basic authentication system with dashboard, login, and logout features. It was created with Node.js for the backend and ReactJS and Bootstrap for the frontend.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
