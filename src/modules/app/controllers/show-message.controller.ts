import { Body, Controller, Post } from '@nestjs/common';
import { ShowMessageService } from '../services/show-message.service';
import { ShowMessageInputDto } from '../domain/dtos/show-message-input.dto';
import { ShowMessageSwaggerDecorator } from '../domain/customDecorators/show-message-swagger.decorator';
import { ShowMessageDto } from '../domain/dtos/show-message.dto';

@Controller()
export class ShowMessageController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly getHelloService: ShowMessageService) { }

  @Post('/message')
  @ShowMessageSwaggerDecorator()
  showMessage(@Body() message: ShowMessageInputDto): ShowMessageDto {
    return this.getHelloService.showMessage(message);
  }
}
