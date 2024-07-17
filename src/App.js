import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Randing from './pages/randing/index';
import Start from './pages/start/index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Randing />} />
        <Route path='/start' element={<Start />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
