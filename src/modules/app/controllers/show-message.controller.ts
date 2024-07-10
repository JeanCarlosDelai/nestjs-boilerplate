import { Body, Controller, Post } from '@nestjs/common';
import { ShowMessageService } from '../services/show-message.service';
import { ShowMessageInputDto } from '../domain/dtos/show-message-input.dto';
import { ShowMessageSwaggerDecorator } from '../domain/decorators/show-message-swagger.decorator';
import { ShowMessageDto } from '../domain/dtos/show-message.dto';

@Controller()
export class ShowMessageController {
  constructor(private readonly getHelloService: ShowMessageService) {}

  @Post('/message')
  @ShowMessageSwaggerDecorator()
  showMessage(@Body() message: ShowMessageInputDto): ShowMessageDto {
    return this.getHelloService.showMessage(message);
  }
}
