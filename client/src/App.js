
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Footer from './components/Footer';
import Register from './pages/Register';
import EventForm from './components/EventForm';
import Profile from './pages/Profile';

function App() {
  return (
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/admin' element={<EventForm/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
    
  );
}

export default App;
