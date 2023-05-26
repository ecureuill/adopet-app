import { adopetAPI } from '../../../src/services/api';

describe('AdoPET API', () => {
	it('should respond OK when get /ping', async () => {
		const resp = await adopetAPI.get('ping');
		expect(resp.status).toBe(200);
	})
})