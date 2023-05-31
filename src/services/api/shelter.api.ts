import { AxiosResponse } from 'axios';
import { UUID } from 'crypto';
import { adopetAPI } from '.';

export const getAll = async (): Promise<AxiosResponse> => {
	return await adopetAPI.get('dabrigos');
};

export const getOneBy = async (id: UUID): Promise<AxiosResponse> => {
	return await adopetAPI.get(`dabrigos/${id}`);
};

export const updateAll = async (id: UUID, body: any): Promise<AxiosResponse> => {
	return await adopetAPI.put(`dabrigos/${id}`, body);
};

export const updateSome = async (id: UUID, body: any): Promise<AxiosResponse> => {
	return await adopetAPI.patch(`dabrigos/${id}`, body);
};

export const remove = async (id: UUID, body: any): Promise<AxiosResponse> => {
	return await adopetAPI.delete(`dabrigos/${id}`);
};


