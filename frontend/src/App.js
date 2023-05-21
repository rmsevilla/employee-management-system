// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListEmployeesComponent from './components/ListEmployeesComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

function App() {
  return (
      <Router>
        <div>
        <HeaderComponent/>
          <div className="container-fluid">
            <Routes>
              <Route path='/' element={<ListEmployeesComponent/>}>
              <Route path='/:id' element={<UpdateEmployeeComponent/>}/>
              </Route>
              <Route path='/login'></Route>  
            </Routes>
          </div>
        <FooterComponent/>
        </div>
      </Router>
  );
}

export default App;

