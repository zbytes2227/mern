import React from 'react'

function Navbar() {
  return (
   <>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">JWT Auth</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <a href="/" className="btn btn-info me-2">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/login" className="btn btn-primary me-2">Login</a>
                    </li>
                    <li className="nav-item">
                        <a href="/register" className="btn btn-success">Register</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
   </>
  )
}

export default Navbar