import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { setupAppTest, teardownApp } from './vitest-setup.e2e';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    app = await setupAppTest();
  });

  afterAll(async () => {
    await teardownApp();
  });

  it('/ (GET)', async () => {
    return await request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
