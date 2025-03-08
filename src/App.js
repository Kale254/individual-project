// App.js
import React, { useState } from 'react';
import { useNavigate, Routes, Route, Link } from 'react-router-dom';
import { Auth } from "./pages/auth/index";
import { auth } from "./config/firebase.config"
import { signOut } from "firebase/auth"
import { Kitchen } from "./pages/kitchen/index";
import { Hall } from "./pages/hall/index";
import { Entire } from "./pages/entire/index";
import { Home } from "./pages/home/index";
import { Pictures } from "./pages/pictures/index";
import { Faq } from "./pages/FAQ/index";
import ProtectedRoute from './components/ProtectedRoute';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const user = auth.currentUser;

  const signUserOut = async () => {
    try {
      await signOut(auth)
      localStorage.clear()
      navigate("/")
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={isMenuOpen} aria-label="Toggle navigation" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
            {user ? (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item px-2">
                <Link to="/home" className="nav-link">Home</Link>
              </li>
              <li className="nav-item px-2">
                <Link to="/pictures" className="nav-link">Pictures</Link>
              </li>
              <li className="nav-item px-2">
                <Link to="/faq" className="nav-link">FAQ</Link>
              </li>
              <li className="nav-item px-2 dropdown">
                <button
                  className="btn btn-link dropdown-toggle nav-link"
                  type="button"
                  id="navbarDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Reserve
                </button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link to="/kitchen" className="dropdown-item">Kitchen</Link></li>
                  <li><Link to="/hall" className="dropdown-item">Hall</Link></li>
                  <li><Link to="/entire" className="dropdown-item">Entire</Link></li>
                </ul>
              </li>
            </ul>
            ) : (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item px-2"><Link to="/home" className="nav-link">Home</Link></li>
                <li className="nav-item px-2"><Link to="/pictures" className="nav-link">Pictures</Link></li>
                <li className="nav-item px-2"><Link to="/faq" className="nav-link">FAQ</Link></li>
              </ul>
            )}
            {user ? (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item" onClick={signUserOut}><Link to="/" className="nav-link">Sign out</Link></li>
              </ul>
            ) : (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link to="/" className="nav-link">Sign in</Link></li>
              </ul>
            )}
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" exact element={<Auth />} />
        <Route path="/home" exact element={
            <Home />
        } />
        <Route path="/pictures" exact element={
            <Pictures />
        } />
        <Route path="/faq" exact element={
            <Faq />
        } />
        <Route path="/kitchen" element={
          <ProtectedRoute>
            <Kitchen />
          </ProtectedRoute>
        } />
        <Route path="/hall" element={
          <ProtectedRoute>
            <Hall />
          </ProtectedRoute>
        } />
        <Route path="/entire" element={
          <ProtectedRoute>
            <Entire />
          </ProtectedRoute>
        } />
      </Routes>
    </div>
  );
}

export default App;
