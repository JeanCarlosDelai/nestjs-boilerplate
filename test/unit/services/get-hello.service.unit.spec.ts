import { Test, TestingModule } from '@nestjs/testing';
import { ShowMessageDto } from 'src/modules/app/domain/dtos/show-message.dto';
import { Messages } from 'src/modules/app/domain/enums/messages.enum';
import { GetHelloService } from 'src/modules/app/services/get-hello.service';

describe('GetHelloServiceUnit', () => {
  let service: GetHelloService;
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [],
      providers: [GetHelloService],
    }).compile();

    service = app.get<GetHelloService>(GetHelloService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', async () => {
      const expectedResponse: ShowMessageDto = {
        message: Messages.HELLO_WORLD,
      };

      const result = await service.getHello();

      expect(result).toEqual(expectedResponse);
    });
  });
});
