import React from 'react';
import "./App.css";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Register from "./Component/Register";
import FetchData from './Component/FetchData';
import Login from "./Component/login"; 
import Update from "./Component/Update";
import Delete from "./Component/delete";

export default function App() {
  return (
    <Router>
      <div>
      <nav className="top-nav">
      <ul>
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/register" className="nav-link">Register</Link>
        </li>
        <li>
          <Link to="/data" className="nav-link">FetchData</Link>
        </li>
        <li>
          <Link to="/login" className="nav-link">Login</Link>
        </li>
        <li>
          <Link to="/update" className="nav-link">Update</Link>
        </li>
        <li>
          <Link to="/delete" className="nav-link">Delete</Link>
        </li>


      </ul>
    </nav>
        <Routes>
          <Route path="/data" element={<FetchData/>} />
          <Route path="/Register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Update" element={<Update />} />
          <Route path="/Delete" element={<Delete />} />
          <Route path="/" element={<Home />} />
          {/* 👇️ only match this when no other routes match */}
          <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found etc</h2>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}




