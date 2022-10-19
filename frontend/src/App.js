import logo from './logo.svg';
import './App.css';
import ListEmployeesComponent from './components/ListEmployeesComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div className="container-fluid">
      <HeaderComponent/>
      <ListEmployeesComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
