import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Notfound from './pages/Notfound';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='*' element={<Notfound/>}/>
        </Routes>
</BrowserRouter>

  );
}

export default App;
