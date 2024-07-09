import { Injectable } from '@nestjs/common';
import { ShowMessageInputDto } from '../domain/dtos/show-message-input.dto';
import { ShowMessageDto } from '../domain/dtos/show-message.dto';

@Injectable()
export class ShowMessageService {
  showMessage(message: ShowMessageInputDto): ShowMessageDto {
    return message;
  }
}
