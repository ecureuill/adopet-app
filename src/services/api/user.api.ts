import { AxiosResponse } from 'axios';
import { randomUUID, UUID } from 'crypto';
import { adopetAPI } from '.';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRhZDI4YWZjLTQyMzMtNGYyMC05YThkLTA3OWE4ODkwMzI3NyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4NTEwNDQ4NywiZXhwIjoxNjg1MTA4MDg3fQ._s5RN-XM7LUbSRU6pMvzsAgxAjpRr1UrsLvTieBiJW0';

export const login = async (email: string, password: string): Promise<AxiosResponse> => {
	return await adopetAPI.post('login',{
			email: email,
			password: password
		});

};

export const signUp = async (email: string, password: string, name: string): Promise<AxiosResponse> => {
	return await adopetAPI.post('signup', {
		email: email,
		password: password,
		name: name
	});
};

export const signUpTutor = async (email: string, password: string, name: string): Promise<AxiosResponse> => {
	return await adopetAPI.post('signup/tutores', {
		user: {
				email: email,
				password: password,
				name: name
		}
	});
};

export const signUpShelter = async (email: string, password: string, name: string): Promise<AxiosResponse> => {
	return await adopetAPI.post('signup/abrigos', {
		user: {
				email: email,
				password: password,
				name: name
		}
	});
};

export const getAll = async (): Promise<AxiosResponse> => {
	return await adopetAPI.get('users');
};

export const getOneBy = async (id: UUID): Promise<AxiosResponse> => {
	return await adopetAPI.get(`users/${id}`);
};

export const updateAll = async (id: UUID, body: any): Promise<AxiosResponse> => {
	return await adopetAPI.put(`users/${id}`, {
		body: body,
	});
};

export const updateSome = async (id: UUID, body: any): Promise<AxiosResponse> => {
	return await adopetAPI.patch(`users/${id}`, {
		body: body,
	});
};

export const remove = async (id: UUID, body: any): Promise<AxiosResponse> => {
	return await adopetAPI.delete(`users/${id}`);
};


