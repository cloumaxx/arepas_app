import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Menu from '../pages/Menu';
import Register from '../pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Register/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
