import { HttpStatus, INestApplication } from '@nestjs/common';
import request from 'supertest';
import { setupAppTest, teardownApp } from './vitest-setup.e2e';
import { Messages } from 'src/modules/app/domain/enums/messages.enum';
import { ShowMessageDto } from 'src/modules/app/domain/dtos/show-message.dto';

describe('getHelloController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    app = await setupAppTest();
  });

  afterAll(async () => {
    await teardownApp();
  });

  it('/ (GET)', async () => {
    const expectedStatusCode = HttpStatus.OK;
    const expectedResponse: ShowMessageDto = {
      message: Messages.HELLO_WORLD,
    };

    const response = await request(app.getHttpServer()).get('/');

    expect(response.statusCode).toEqual(expectedStatusCode);
    expect(response.body).toEqual(expectedResponse);
  });
});
