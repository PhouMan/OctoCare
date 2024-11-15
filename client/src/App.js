// client/src/App.js

import React from "react";
import logo from './logo.svg';
import './App.css';
import { Emergency } from './Emergency.js';
import { Home } from './home.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helloworld } from "./helloworld.js";
import { Section1 } from "./section1.js";
import ReadPage from "./readPage.js";
import { Emergency } from "./emergency.js";



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
	        			<Route path="/Emergency" element={<Emergency />} />
                <Route path="/section1/" element={<Section1 />} />
                <Route path="/emergency/" element={<Emergency />} />


                <Route 
                  path="/readSection1/:id" 
                  element={<ReadPage file="section1.json" />} 
                />
            </Routes>
        </Router>
    </div>
  );
}

export default App;