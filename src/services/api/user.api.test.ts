import { faker } from '@faker-js/faker/locale/pt_BR';
import { getAll, login, signUp } from './user.api';

describe('AdoPET API', () => {

	it('should respond OK when post /login', async () => {
		const resp = await login('admin1@mail.com', '12345678');
		expect(resp.status).toBe(200);
	});

	it('should respond OK when post /signup', async () => {
		const resp = await signUp(faker.internet.email(), faker.internet.password(), faker.person.fullName());
		
		expect(resp.status).toBe(201);
	});

	it('should respond OK when get /users', async () => {
		const resp = await getAll();
		expect(resp.status).toBe(200);
	});
});