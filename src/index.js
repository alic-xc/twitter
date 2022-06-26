import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import LoginScreen, {LoginForm} from './Auth/Login'
import RegistrationForm from './Auth/RegistrationForm';


import './input.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HashRouter>
    <Routes>
      <Route exact path="/" index element={<LoginScreen />} />
      <Route exact path="i/flow" element={<LoginScreen />}>
          <Route exact path="login" element={<LoginForm />} />
          <Route exact path="signup" element={<RegistrationForm />} />
      </Route>

    </Routes>
  </HashRouter>
);

