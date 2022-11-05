import logo from './logo.svg';
import './App.css';
import { NavigationBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <NavigationBar />
      </React.Fragment>
    </div>
  );
}

export default App;
