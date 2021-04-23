import React from 'react';
import { Middleware, SetGlobalRerender } from './Helper';
import { SwitchRoute } from './Helper/SwitchRoute';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes/AppRoute';
import './App.scss';
import { useState } from 'react';

const App = () => {
  const [render, setRender] = useState(false);
  SetGlobalRerender(setRender, render);

  return (
    <Router>
      <Middleware />
      <SwitchRoute routes={AppRoutes} />
    </Router>
  );
};

export default App;
