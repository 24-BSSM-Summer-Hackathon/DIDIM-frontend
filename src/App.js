import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Randing from './pages/randing/index';
import Start from './pages/start/index';
import './App.css';
import Login from './pages/Login';
import Serial from './pages/Serial';
import Main from './pages/Main'
import MyPage from './pages/MyPage';

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<Randing />} />
          <Route path="/start" element={<Start />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Serial" element={<Serial />} />
          <Route path="/main" element={<Main />} />
          <Route path="/mypage" element={<MyPage/>} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;