import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/home';
import AboutUs from './containers/aboutUs';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
