import { HttpStatus, INestApplication } from '@nestjs/common';
import request from 'supertest';
import { setupAppTest, teardownApp } from './vitest-setup.e2e';
import { ShowMessageDto } from 'src/modules/app/domain/dtos/show-message.dto';
import { ShowMessageInputDto } from 'src/modules/app/domain/dtos/show-message-input.dto';

describe('showMessageController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    app = await setupAppTest();
  });

  afterAll(async () => {
    await teardownApp();
  });

  it('/message (POST)', async () => {
    const expectedStatusCode = HttpStatus.CREATED;
    const showMessageInput: ShowMessageInputDto = {
      message: 'Any message',
    };
    const expectedResponse: ShowMessageDto = {
      message: showMessageInput.message,
    };

    const response = await request(app.getHttpServer())
      .post('/message')
      .send(showMessageInput);

    expect(response.statusCode).toEqual(expectedStatusCode);
    expect(response.body).toEqual(expectedResponse);
  });
});
