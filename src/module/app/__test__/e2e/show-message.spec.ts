import { HttpStatus, INestApplication } from '@nestjs/common';
import request from 'supertest';
import { setupAppTest, teardownApp } from 'test/vitest-setup.e2e.js';
import { MessageInputDto } from '../../http/dto/show-message/message-input.dto';
import { MessageOutputDto } from '../../http/dto/show-message/message-output.dto';

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
    const showMessageInput: MessageInputDto = {
      message: 'Any message'
    };
    const expectedResponse: MessageOutputDto = {
      message: showMessageInput.message
    };

    const response = await request(app.getHttpServer())
      .post('/message')
      .send(showMessageInput);

    expect(response.statusCode).toEqual(expectedStatusCode);
    expect(response.body).toEqual(expectedResponse);
  });
});
