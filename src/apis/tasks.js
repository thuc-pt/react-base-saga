import CallApi from '../commons/ApiCaller/AxiosService';
import {API_DOMAIN} from '../constants/index';
import qs from 'query-string';

export const requestGetTasks = (params) => {
  let queryParams = ''
  if (Object.keys(params).length > 0) {
    queryParams = `?${qs.stringify(params)}`
  }
  return CallApi.get(`${API_DOMAIN}tasks${queryParams}`)
};

export const requestCreateTask = data => {
  return CallApi.post(`${API_DOMAIN}tasks`, data)
};

export const requestUpdateTask = (data, id) => {
  return CallApi.put(`${API_DOMAIN}tasks/${id}`, data)
};

export const requestDeleteTask = id => {
  return CallApi.delete(`${API_DOMAIN}tasks/${id}`)
};
