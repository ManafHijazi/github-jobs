import { useHistory } from 'react-router';

// component which we will mount on top of the app
export let GlobalHistory = null;
let renderVar = false;
let setRenderVar = null;

export const SetGlobalRerender = (setRender, render) => {
  renderVar = render;
  setRenderVar = setRender;
};

const MiddlewareHelper = () => {
  GlobalHistory = useHistory();
  return null;
};
export { MiddlewareHelper as Middleware };

export const GlobalRerender = () => {
  setRenderVar(!renderVar);
};
