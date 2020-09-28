import * as supertest from 'supertest';
import app from '../src/app';

const server = app.listen(3000);
const request = supertest(server);

afterAll(() => server.close());

describe('token test', () => {
  it('get', async () => {
    await request.get('/token')
        .expect(200);
  });
});

