import { Test, TestingModule } from '@nestjs/testing';
import { GetHelloController } from 'src/modules/app/controllers/get-hello.controller';
import { ShowMessageDto } from 'src/modules/app/domain/dtos/show-message.dto';
import { GetHelloService } from 'src/modules/app/services/get-hello.service';

describe('GetHelloControllerIntegration', () => {
  let controller: GetHelloController;
  let service: GetHelloService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GetHelloController],
      providers: [GetHelloService],
    }).compile();

    controller = app.get<GetHelloController>(GetHelloController);
    service = app.get<GetHelloService>(GetHelloService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', async () => {
      const expectedResponse: ShowMessageDto = {
        message: 'Hello World!',
      };

      const result = await controller.getHello();

      expect(result).toEqual(expectedResponse);
    });
  });
});
