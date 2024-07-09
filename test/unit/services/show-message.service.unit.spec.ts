import { Test, TestingModule } from '@nestjs/testing';
import { ShowMessageInputDto } from 'src/modules/app/domain/dtos/show-message-input.dto';
import { ShowMessageDto } from 'src/modules/app/domain/dtos/show-message.dto';
import { ShowMessageService } from 'src/modules/app/services/show-message.service';

describe('showMessageServiceUnit', () => {
  let service: ShowMessageService;
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [],
      providers: [ShowMessageService],
    }).compile();

    service = app.get<ShowMessageService>(ShowMessageService);
  });

  it('should be defined', () => {
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

      const result = await service.showMessage(showMessageInput);

      expect(result).toEqual(expectedResponse);
    });
  });
});
