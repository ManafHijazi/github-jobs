import React, { useRef } from 'react';
import { Middleware } from './Helper';
import { SwitchRoute } from './Helper/SwitchRoute';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes/AppRoute';
import './App.scss';

const App = () => {
  const nodeRef = useRef(null);
  
  return (
    <Router ref={nodeRef}>
      <Middleware />
      <SwitchRoute routes={AppRoutes} />
    </Router>
  );
};

export default App;
