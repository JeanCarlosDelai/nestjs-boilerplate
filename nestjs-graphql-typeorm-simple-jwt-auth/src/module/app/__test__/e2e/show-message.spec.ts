import { HttpStatus, INestApplication } from '@nestjs/common';
import request from 'supertest';
import { setupAppTest, teardownApp } from 'test/vitest-setup.e2e.js';

describe('showMessageResolver (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    app = await setupAppTest();
  });

  afterAll(async () => {
    await teardownApp();
  });

  it(' (POST)', async () => {
    const expectedStatusCode = HttpStatus.OK;
    const query = `
      query ShowMessage {
        showMessage(message: "message here") {
          message
        }
      }
    `;
    const expectedResponse = {
      data: {
        showMessage: {
          message: 'message here'
        }
      }
    };

    const response = await request(app.getHttpServer()).post('/graphql').send({ query });

    expect(response.statusCode).toEqual(expectedStatusCode);
    expect(response.body).toEqual(expectedResponse);
  });
});
