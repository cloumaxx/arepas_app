
import './App.css';
import { NavigationBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Menu } from './components/Menu';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <NavigationBar />
        <div className='pantalla'>
          <Menu />
        </div>
      </React.Fragment>
    </div>
  );
}

export default App;