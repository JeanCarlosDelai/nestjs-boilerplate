import { Test, TestingModule } from '@nestjs/testing';
import { AppLogger } from '@src/shared/infra/logger/app-logger.service';
import { ShowMessageUseCase } from 'src/module/app/core/usecase/show-message.usecase';
import { ShowMessageController } from 'src/module/app/http/controller/show-message.controller';
import { MessageInputDto } from 'src/module/app/http/dto/show-message/message-input.dto';
import { MessageOutputDto } from 'src/module/app/http/dto/show-message/message-output.dto';

describe('ShowMessageController Integration test', () => {
  let controller: ShowMessageController;
  let usecase: ShowMessageUseCase;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ShowMessageController],
      providers: [ShowMessageUseCase, AppLogger]
    }).compile();

    controller = app.get<ShowMessageController>(ShowMessageController);
    usecase = app.get<ShowMessageUseCase>(ShowMessageUseCase);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(usecase).toBeDefined();
  });

  describe('showMessage', () => {
    it('should be possible to return "Any message"', async () => {
      const showMessageInput: MessageInputDto = {
        message: 'Any message'
      };
      const expectedResponse: MessageOutputDto = {
        message: 'Any message'
      };

      const result = controller.showMessage(showMessageInput);

      expect(result).toEqual(expectedResponse);
    });
  });
});
