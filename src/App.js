import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Randing from './pages/randing/index';
import Start from './pages/start/index';
import './App.css';
import Login from './pages/Login';
import Serial from './pages/Serial';
import Main from './pages/Main';
import MyPage from './pages/MyPage';
import Footprint from './pages/Footprint';
import Manage from './pages/Manage';
import Footer from './components/Footer';
import Signup from './pages/signup'
import Test from './pages/Test';

function App() {
  const location = useLocation();
  const noFooterPaths = ['/', '/start', '/login', '/signup', '/test', '/serial'];

  return (
    <div>
      <AnimatedRoutes />
      {!noFooterPaths.includes(location.pathname) && <Footer />}
    </div>
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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/serial" element={<Serial />} />
          <Route path="/main" element={<Main />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/footprint" element={<Footprint />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function AppWithRouter() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWithRouter;
