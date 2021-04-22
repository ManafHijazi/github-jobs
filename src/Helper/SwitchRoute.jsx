import React from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

export const SwitchRoute = ({ routes }) => {
  const route = routes.find((f) => f.isDefault === true);

  return (
    <Switch>
      {routes.map((item, index) => (
        <Route
          path={item.layout + item.path}
          component={item.component}
          key={`route-${index + 1}`}
        />
      ))}
      <Redirect exact from={route.layout} to={route.layout + route.path} />
    </Switch>
  );
};
SwitchRoute.propTypes = {
  routes: PropTypes.instanceOf(Object).isRequired,
};
