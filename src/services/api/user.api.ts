import { AxiosResponse } from 'axios';
import { UUID } from 'crypto';
import { adopetAPI } from '.';

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


