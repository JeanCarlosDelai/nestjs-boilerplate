import { Test, TestingModule } from '@nestjs/testing';
import { MessageInputDto } from 'src/module/app/http/dto/show-message/message-input.dto';
import { MessageOutputDto } from 'src/module/app/http/dto/show-message/message-output.dto';
import { ShowMessageUseCase } from '@src/module/app/core/usecase/show-message.usecase';
import { AppLogger } from '@src/shared/infra/logger/service/app-logger.service';

describe('ShowMessageUseCase unit test', () => {
  let usecase: ShowMessageUseCase;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [],
      providers: [ShowMessageUseCase, AppLogger]
    }).compile();

    usecase = app.get<ShowMessageUseCase>(ShowMessageUseCase);
  });

  it('should be defined', () => {
    expect(usecase).toBeDefined();
  });

  describe('execute', () => {
    it('should be possible to return "Any message"', async () => {
      const showMessageInput: MessageInputDto = {
        message: 'Any message'
      };
      const expectedResponse: MessageOutputDto = {
        message: 'Any message'
      };

      const result = usecase.execute(showMessageInput);

      expect(result).toEqual(expectedResponse);
    });
  });
});
