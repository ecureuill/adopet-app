export const apiSettings = {
	baseURL: process.env.BASE_URL,
	port: process.env.NODE_ENV === 'development'? process.env.DEV_PORT :
		process.env.NODE_ENV === 'test'? process.env.TEST_PORT :
			process.env.PROD_PORT
};

