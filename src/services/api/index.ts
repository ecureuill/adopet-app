import axios, { AxiosInstance } from 'axios';
import { apiSettings } from '../../config';

export const adopetAPI: AxiosInstance = axios.create({
	baseURL: `${apiSettings.baseURL}:${apiSettings.port}`
});