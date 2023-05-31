import { AxiosResponse } from 'axios';
import { UUID } from 'crypto';
import { adopetAPI } from '.';

export const getAll = async (): Promise<AxiosResponse> => {
	return await adopetAPI.get('adocoes');
};

export const getOneBy = async (id: UUID): Promise<AxiosResponse> => {
	return await adopetAPI.get(`adocoes/${id}`);
};

export const remove = async (id: UUID, body: any): Promise<AxiosResponse> => {
	return await adopetAPI.delete(`adocoes/${id}`);
};


