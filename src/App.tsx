import React from 'react';
import loadable from '@loadable/component';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Main from './components/Main';

const Login = loadable(() => import('./components/Login'));
const SignUp = loadable(() => import('./components/SignUp'));

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route index element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
