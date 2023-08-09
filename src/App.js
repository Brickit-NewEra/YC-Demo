import logo from "./logo.svg";
import "./App.css";
import { styles } from "./styles";
import RegisterClient from "./components/Register/Client/RegisterClient";

//Other libraries
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/login" exacct element={<Login />} />
          <Route path="/register" exacct element={<RegisterClient />} />
          <Route path="/" exacct element={<Home />} />
          <Route path="/projects" exacct element={<Projects />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
