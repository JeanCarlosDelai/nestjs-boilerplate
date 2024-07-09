import { Injectable } from '@nestjs/common';
import { ShowMessageDto } from '../domain/dtos/show-message.dto';

@Injectable()
export class GetHelloService {
  getHello(): ShowMessageDto {
    return {
      message: 'Hello World!',
    };
  }
}
