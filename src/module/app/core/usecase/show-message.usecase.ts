import { Injectable } from '@nestjs/common';
import { MessageInputDto } from '@src/module/app/http/dto/show-message/message-input.dto';
import { MessageOutputDto } from '@src/module/app/http/dto/show-message/message-output.dto';
import { AppLogger } from '@src/shared/infra/logger/app-logger.service';

@Injectable()
export class ShowMessageUseCase {
  constructor(private readonly appLogger: AppLogger) {}
  execute(message: MessageInputDto): MessageOutputDto {
    this.appLogger.log('Return message', { content: message });
    return message;
  }
}
