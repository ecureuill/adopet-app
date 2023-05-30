import { UUID } from 'crypto';

export interface User {
	id?: UUID,
	name?: string,
	role: 'admin' | 'tutor' | 'shelter' | 'ANY',
	photo?: string | Buffer

}