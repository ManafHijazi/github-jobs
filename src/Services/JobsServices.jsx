import { HttpServices, showError } from '../Helper';

const baseUrl = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/';
export const GetAllJobOpenings = async ({ description, location }, page) => {
  const queryList = [];
  if (description) queryList.push(`description=${description}`);
  if (location) queryList.push(`location=${location}`);
  if (page) queryList.push(`page=${page}`);
  const result = await HttpServices.get(`${baseUrl}positions.json?${queryList.join('&')}`)
    .then((data) => data)
    .catch((error) => showError(error.statusText));
  return result;
};

export const GetAllJobOpeningsById = async (jobId) => {
  const result = await HttpServices.get(`${baseUrl}positions/${jobId}.json`)
    .then((data) => data)
    .catch((error) => showError(error.statusText));
  return result;
};
