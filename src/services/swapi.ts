import axios from 'axios';

const SWAPI_BASE = 'https://swapi.dev/api/';

export const fetchResource = async (resourceType: string, id: string) => {
  const { data } = await axios.get(`${SWAPI_BASE}${resourceType}/${id}/`);
  return data;
};

export const fetchEnrichedData = async (urls: string | string[]) => {
  const urlsArray = Array.isArray(urls) ? urls : [urls];
  const responses = await Promise.all(urlsArray.map(url => axios.get(url)));
  return responses.map(res => res.data);
};