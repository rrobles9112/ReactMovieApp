import axios from 'axios';
import { base as baseURL } from './data';

const getInstanceData = () => {

  
  const headers = {
 
  };
  return { headers, baseURL };

};

function checkStatus(response) {

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
