import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState";
import About from "./components/About";
import Signup from './components/Signup';
import Login from './components/Login';


function App() {
  return (
    <div>
    <NoteState>
      <Router>
        <Navbar />
        <showAlert alert={alert} />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<Signup/>} />
        </Routes>
      </Router>

      </NoteState>
    </div>
  );
}

export default App;
