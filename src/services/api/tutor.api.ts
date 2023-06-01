import { AxiosResponse } from 'axios';
import { UUID } from 'crypto';
import { adopetAPI } from '.';

export const getAll = async (): Promise<AxiosResponse> => {
	return await adopetAPI.get('tutores');
};

export const getOneBy = async (id: UUID): Promise<AxiosResponse> => {
	return await adopetAPI.get(`tutores/${id}`);
};

export const updateAll = async (id: UUID, body: any): Promise<AxiosResponse> => {
	return await adopetAPI.put(`tutores/${id}`, body, {
		headers: {
			'Content-Type':'multipart/form-data'
		}
	});
};

export const updateSome = async (id: UUID, body: any): Promise<AxiosResponse> => {
	return await adopetAPI.patch(`tutores/${id}`,body, {
		headers: {
			'Content-Type':'multipart/form-data'
		}
	});
};

export const remove = async (id: UUID, body: any): Promise<AxiosResponse> => {
	return await adopetAPI.delete(`tutores/${id}`);
};


