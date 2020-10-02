import * as supertest from 'supertest';
import app from '../src/app';

const server = app.listen(3000);
const request = supertest(server);

afterAll(() => server.close());

describe('user test', () => {
  it('getList', async () => {
    await request.post('/user')
        .expect(200);
  });
});

