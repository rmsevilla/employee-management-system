import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListEmployeesComponent from './components/ListEmployeesComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
      <Router>
        <div>
        <HeaderComponent/>
          <div className="container-fluid">
            <Routes>
              <Route path='/' element={<ListEmployeesComponent/>}></Route>
            </Routes>
          </div>
        <FooterComponent/>
        </div>
      </Router>
  );
}

export default App;
