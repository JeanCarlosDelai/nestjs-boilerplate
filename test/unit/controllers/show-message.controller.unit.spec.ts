import { Test, TestingModule } from '@nestjs/testing';
import { ShowMessageController } from 'src/modules/app/controllers/show-message.controller';
import { ShowMessageInputDto } from 'src/modules/app/domain/dtos/show-message-input.dto';
import { ShowMessageDto } from 'src/modules/app/domain/dtos/show-message.dto';
import { ShowMessageService } from 'src/modules/app/services/show-message.service';
import { vi } from 'vitest';

describe('showMessageControllerUnit', () => {
  let controller: ShowMessageController;
  let service: ShowMessageService;

  const mockService = {
    getHello: vi.fn(),
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ShowMessageController],
      providers: [ShowMessageService],
    }).compile();

    controller = app.get<ShowMessageController>(ShowMessageController);
    service = app.get<ShowMessageService>(ShowMessageService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  describe('showMessage', () => {
    it('should return "Hello World!"', async () => {
      const showMessageInput: ShowMessageInputDto = {
        message: 'Any message',
      };
      const expectedResponse: ShowMessageDto = {
        message: 'Any message',
      };
      mockService.getHello.mockResolvedValue(expectedResponse);

      const result = await controller.showMessage(showMessageInput);

      expect(result).toEqual(expectedResponse);
    });
  });
});
