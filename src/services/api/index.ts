import axios, { AxiosInstance } from 'axios';
import { apiSettings } from '../../config';

export const adopetAPI: AxiosInstance = axios.create({
	baseURL: `${apiSettings.baseURL}:${apiSettings.port}`
});

// Add a response interceptor
adopetAPI.interceptors.response.use((response) => {
	// Any status code that lie within the range of 2xx cause this function to trigger
	// Do something with response data
	return response;
}, function (error) {
	// Any status codes that falls outside the range of 2xx cause this function to trigger
	// Do something with response error
	// console.debug(error);
	return {
		error: error.response.data,
		status: error.response.status,
		statusText: error.response.statusText,
		redirect: error.response.status >= 500
	};
});	