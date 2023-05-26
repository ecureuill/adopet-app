import { adopetAPI } from '../../../src/services/api';
import { login, getAll, signUp } from '../../../src/services/api/user.api';
import { faker } from '@faker-js/faker/locale/pt_BR';

describe('AdoPET API', () => {

	it('should respond OK when post /login', async () => {
		const resp = await login('admin1@mail.com', '12345678');
		expect(resp.status).toBe(200);
	});

	it('should respond OK when post /signup', async () => {
		const resp = await signUp(faker.internet.email(), faker.internet.password(), faker.person.fullName())
		
		expect(resp.status).toBe(201);
	});

	it('should respond OK when get /users', async () => {
		const resp = await getAll();
		expect(resp.status).toBe(200);
	});
});