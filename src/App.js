import React from "react";
import "./style.css";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import MainLayout from "./Components/Layouts/MainLayout.jsx";
import Dashboard from "./Features/Dashboard"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>

          <Route
            path="/"
            element={<Dashboard />}
          />

          {/* <Route
            path="/generator"
            element={<Generator />}
          />

          <Route
            path="/history"
            element={<History />}
          />

          <Route
            path="/templates"
            element={<Templates />}
          />

          <Route
            path="/favorites"
            element={<Favorites />}
          />

          <Route
            path="/settings"
            element={<Settings />}
          /> */}

        </Route>

      </Routes>
    </BrowserRouter>
  );
}
