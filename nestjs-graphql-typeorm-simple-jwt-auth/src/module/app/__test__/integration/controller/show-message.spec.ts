import { Test, TestingModule } from '@nestjs/testing';
import { AppLogger } from '@src/shared/module/logger/app-logger.service';
import { ShowMessageUseCase } from 'src/module/app/core/usecase/show-message.usecase';
import { ShowMessageResolver } from '@src/module/app/http/resolver/show-message.resolver';
import { MessageInputDto } from 'src/module/app/http/dto/show-message/message-input.dto';
import { MessageOutputDto } from 'src/module/app/http/dto/show-message/message-output.dto';

describe('ShowMessageResolver Integration test', () => {
  let resolver: ShowMessageResolver;
  let usecase: ShowMessageUseCase;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [ShowMessageResolver, ShowMessageUseCase, AppLogger]
    }).compile();

    resolver = app.get<ShowMessageResolver>(ShowMessageResolver);
    usecase = app.get<ShowMessageUseCase>(ShowMessageUseCase);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
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

      const result = resolver.showMessage(showMessageInput);

      expect(result).toEqual(expectedResponse);
    });
  });
});
