import { useHistory } from 'react-router';

// component which we will mount on top of the app
export let GlobalHistory = null;

const MiddlewareHelper = () => {
  GlobalHistory = useHistory();
  return null;
};
export { MiddlewareHelper as Middleware };
