import { Injectable } from '@nestjs/common';
import { MessageInputDto } from '@src/module/app/http/dto/show-message/message-input.dto';
import { MessageOutputDto } from '@src/module/app/http/dto/show-message/message-output.dto';
import { AppLogger } from '@src/shared/infra/logger/service/app-logger.service';

@Injectable()
export class ShowMessageUseCase {
  constructor(private readonly appLogger: AppLogger) {}
  execute(message: MessageInputDto): MessageOutputDto {
    this.appLogger.log('Retornado mensagem para o usuário', { content: message });

    return message;
  }
}
