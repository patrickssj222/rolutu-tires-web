import React from 'react';
import { Home } from 'pages/Home/Home';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import RequireAuth from './router/RequireAuth';
import { Route, Routes } from 'react-router';
import Login from './pages/Login';
import Logout from './pages/Logout';
import {Product} from "pages/Product/Product";
import {Purchase} from "pages/Purchase/Purchase"

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
        <Route path="/product" element={<Product />} />
        <Route path="/purchase" element={<Purchase />} />
      </Routes>
    </div>
  );
}

export default App;
