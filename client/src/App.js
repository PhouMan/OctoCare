// client/src/App.js

import React from "react";
import logo from './logo.svg';
import './App.css';
import { Home } from './home.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helloworld } from "./helloworld.js";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/helloworld" element={< Helloworld/>} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;