import React from 'react';
import { Middleware } from './Helper';
import { SwitchRoute } from './Helper/SwitchRoute';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes/AppRoute';
import './App.scss';

const App = () => {
  return (
    <Router>
      <Middleware />
      <SwitchRoute routes={AppRoutes} />
    </Router>
  );
};

export default App;
