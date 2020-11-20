import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./hook/auth-context";
import AppRoute from "./route";
export default function App() {
 
  return (
    <Router>
      <AuthProvider >
        <AppRoute />
      </AuthProvider>
    </Router>
  );
}
