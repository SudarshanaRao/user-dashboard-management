import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import './style.css';
import UserForm from "./pages/UserForm";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/userform" element={<UserForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
