import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Dashboard from './pages/dashboard/dashboard';
import Signup from './pages/Signup/Signup';
import Home from './pages/Home/Home';
import Createvideo from './pages/Createvideo/Createvideo';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/createvideo" element={<Createvideo />} />
       </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
