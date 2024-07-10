import { Module } from '@nestjs/common';
import { GetHelloService } from './services/get-hello.service';
import { ShowMessageService } from './services/show-message.service';
import { GetHelloController } from './controllers/get-hello.controller';
import { ShowMessageController } from './controllers/show-message.controller';

@Module({
  imports: [],
  controllers: [GetHelloController, ShowMessageController],
  providers: [GetHelloService, ShowMessageService],
})

// eslint-disable-next-line prettier/prettier
export class AppModule {}
