import React from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Navbar from './components/Navbar';
import SingleAnime from './pages/SingleAnime';
import Error from './pages/Error';
import Home from './pages/Home';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='anime/:id' element={<SingleAnime />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
