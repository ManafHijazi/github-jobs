import { HttpServices, showError } from '../Helper';

// I'm using https://cors-anywhere.herokuapp.com/ proxy to bypass the CORS error
const baseUrl = 'https://thingproxy.freeboard.io/fetch/https://jobs.github.com/';
export const GetAllJobOpenings = async ({ description, location }, page) => {
  const queryList = [];
  if (description) queryList.push(`description=${description}`);
  if (location) queryList.push(`location=${location}`);
  if (page) queryList.push(`page=${page}`);
  const result = await HttpServices.get(`${baseUrl}positions.json?${queryList.join('&')}`)
    .then((data) => data)
    .catch((error) => showError(error));
  return result;
};

export const GetAllJobOpeningsById = async (jobId) => {
  const result = await HttpServices.get(`${baseUrl}positions/${jobId}.json`)
    .then((data) => data)
    .catch((error) => showError(error));
  return result;
};
