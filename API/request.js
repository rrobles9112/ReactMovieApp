import axios from 'axios';
import { base as baseURL } from './data';

const getInstanceData = () => {

  const token = localStorage.getItem('access_token');
  const headers = {
    Authorization: `Bearer ${token || ''}`,
  };
  return { headers, baseURL };

};

function checkStatus(response) {
  console.log('checkStatus ->', response); // eslint-disable-line
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

const handleError = ({ response }) => {
  const { data } = response;
  return data;
};

export default function request(requestData) {

  const axiosInctance = axios.create(getInstanceData());
  return axiosInctance(requestData)
    .then(checkStatus)
    .then(({ data }) => data)
    .catch(handleError);

}
