import axios from 'axios';

// Add Http Services if we want to change from axios in the future
export const HttpServices = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  create: axios.create,
};
