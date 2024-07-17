import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Randing from './pages/randing/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Randing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
