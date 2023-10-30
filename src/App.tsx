import React from 'react';
import { Home } from 'pages/Home/Home';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import RequireAuth from './router/RequireAuth';
import { Route, Routes } from 'react-router';
import Login from './pages/Login';
import Logout from './pages/Logout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
