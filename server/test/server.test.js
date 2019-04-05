const app = require('../server');
const testServer = require('supertest');

describe('Test the root path', () => {
    test('It should respond 200 to the LOGOUT route', async () => {
        const response = await testServer(app).get('/api/user/logout');
        expect(response.statusCode).toBe(200);
    });
});