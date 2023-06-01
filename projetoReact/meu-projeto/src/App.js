import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

//Pages
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Atendimento from './pages/Atendimento';

//Componets
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      
      <h1>Hello world</h1>

      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="atendimento" element={<Atendimento/>} />
          <Route path="Sobre" element={<Sobre/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
