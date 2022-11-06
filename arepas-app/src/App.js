
import './App.css';
import { NavigationBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Menu } from './components/Menu';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Layout } from './layout';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <NavigationBar />
        <Layout>
          <Router>
            <Routes>
              <Route exact path="/Menu" element={<Menu/>} />
              <Route path="/Login" element={<Login/>} />
              <Route path="/Register" element={<Register/>} />
            </Routes>
          </Router>
        </Layout>
      </React.Fragment>
    </div>
  );
}

export default App;