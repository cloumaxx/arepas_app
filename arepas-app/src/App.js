import './App.css';
import NavigationBar  from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Menu } from './components/Menu';
import Login  from './components/Login';
import { Register } from './components/Register';
import { Layout } from './layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ThemeProvider from 'react-bootstrap/ThemeProvider'

function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs">
      <div className="App ">
        <NavigationBar />
        <React.Fragment>
          <Layout>
            <Router>
              <Routes>
                <Route exact path="/" element={<Menu />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
              </Routes>
            </Router>
          </Layout>
        </React.Fragment>
      </div>
    </ThemeProvider>
  );
}

export default App;