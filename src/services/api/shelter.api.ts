import { AxiosResponse } from 'axios';
import { randomUUID, UUID } from 'crypto';
import { adopetAPI } from '.';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRhZDI4YWZjLTQyMzMtNGYyMC05YThkLTA3OWE4ODkwMzI3NyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4NTEwNDQ4NywiZXhwIjoxNjg1MTA4MDg3fQ._s5RN-XM7LUbSRU6pMvzsAgxAjpRr1UrsLvTieBiJW0';

export const getAll = async (): Promise<AxiosResponse> => {
	return await adopetAPI.get('dabrigos');
};

export const getOneBy = async (id: UUID): Promise<AxiosResponse> => {
	return await adopetAPI.get(`dabrigos/${id}`);
};

export const updateAll = async (id: UUID, body: any): Promise<AxiosResponse> => {
	return await adopetAPI.put(`dabrigos/${id}`, {
		body: body,
	});
};

export const updateSome = async (id: UUID, body: any): Promise<AxiosResponse> => {
	return await adopetAPI.patch(`dabrigos/${id}`, {
		body: body,
	});
};

export const remove = async (id: UUID, body: any): Promise<AxiosResponse> => {
	return await adopetAPI.delete(`dabrigos/${id}`);
};


