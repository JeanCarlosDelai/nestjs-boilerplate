import { Test, TestingModule } from '@nestjs/testing';
import { ShowMessageResolver } from '@src/module/app/http/resolver/show-message.resolver';
import { ShowMessageUseCase } from 'src/module/app/core/usecase/show-message.usecase';
import { MessageInputDto } from '@src/module/app/http/dto/show-message/message-input.dto';
import { MessageOutputDto } from '@src/module/app/http/dto/show-message/message-output.dto';
import { vi } from 'vitest';

describe('ShowMessageResolver Unit test', () => {
  let resolver: ShowMessageResolver;
  let usecase: ShowMessageUseCase;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        ShowMessageResolver,
        {
          provide: ShowMessageUseCase,
          useValue: {
            execute: vi.fn()
          }
        }
      ]
    }).compile();

    resolver = app.get<ShowMessageResolver>(ShowMessageResolver);
    usecase = app.get<ShowMessageUseCase>(ShowMessageUseCase);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
    expect(usecase).toBeDefined();
  });

  describe('showMessage', () => {
    it('should be possible to return "Any message"', () => {
      const showMessageInput: MessageInputDto = {
        message: 'Any message'
      };
      const expectedResponse: MessageOutputDto = {
        message: 'Any message'
      };

      vi.spyOn(usecase, 'execute').mockReturnValue(expectedResponse);

      const result = resolver.showMessage(showMessageInput);

      expect(result).toEqual(expectedResponse);
    });
  });
});
