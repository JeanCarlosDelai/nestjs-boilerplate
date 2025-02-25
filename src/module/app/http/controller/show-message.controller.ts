import { Body, Controller, Post } from '@nestjs/common';
import { ShowMessageUseCase } from '@src/module/app/core/usecase/show-message.usecase';
import { ShowMessageSwaggerDecorator } from './swagger/show-message-swagger.decorator';
import { MessageInputDto } from '@src/module/app/http/dto/show-message/message-input.dto';
import { MessageOutputDto } from '@src/module/app/http/dto/show-message/message-output.dto';

@Controller()
export class ShowMessageController {
  constructor(private readonly showMessageUseCase: ShowMessageUseCase) {}

  @Post('/message')
  @ShowMessageSwaggerDecorator()
  showMessage(@Body() message: MessageInputDto): MessageOutputDto {
    return this.showMessageUseCase.execute(message);
  }
}
