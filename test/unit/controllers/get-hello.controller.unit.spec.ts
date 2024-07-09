import { Test, TestingModule } from '@nestjs/testing';
import { GetHelloController } from 'src/modules/app/controllers/get-hello.controller';
import { ShowMessageDto } from 'src/modules/app/domain/dtos/show-message.dto';
import { Messages } from 'src/modules/app/domain/enums/messages.enum';
import { GetHelloService } from 'src/modules/app/services/get-hello.service';
import { vi } from 'vitest';

describe('GetHelloControllerUnit', () => {
  let controller: GetHelloController;

  const mockService = {
    getHello: vi.fn(),
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GetHelloController],
      providers: [
        {
          provide: GetHelloService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = app.get<GetHelloController>(GetHelloController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', async () => {
      const expectedResponse: ShowMessageDto = {
        message: Messages.HELLO_WORLD,
      };
      mockService.getHello.mockResolvedValueOnce(expectedResponse);

      const result = await controller.getHello();

      expect(result).toEqual(expectedResponse);
    });
  });
});
