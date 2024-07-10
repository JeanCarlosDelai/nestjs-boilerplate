import { Controller, Get } from '@nestjs/common';
import { GetHelloService } from '../services/get-hello.service';
import { GetHelloSwaggerDecorator } from '../domain/customDecorators/get-hello-swagger.decorator';
import { ShowMessageDto } from '../domain/dtos/show-message.dto';

@Controller()
export class GetHelloController {
  constructor(private readonly getHelloService: GetHelloService) {}

  @Get()
  @GetHelloSwaggerDecorator()
  getHello(): ShowMessageDto {
    return this.getHelloService.getHello();
  }
}
