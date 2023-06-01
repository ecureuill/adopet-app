import { UUID } from 'crypto';

export interface User {
	id?: UUID,
	name?: string,
	role: 'admin' | 'tutor' | 'shelter' | 'ANY',
	photo?: any

}

export type FormDataState = {
	value: string,
	valid: boolean,
	file?: File, 
	errormessage?: string
}

export type SubmitStatus = 'success' | 'failed' | 'not-submited';

export type SubmitedStatus = {
	status: SubmitStatus,
	message?: string
}