import { adopetAPI } from './index';

describe('AdoPET API', () => {
	it('should respond OK when get /ping', async () => {
		const resp = await adopetAPI.get('ping');
		expect(resp.status).toBe(200);
	});
});