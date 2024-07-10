import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GetHelloController } from 'src/modules/app/controllers/get-hello.controller';
import { ShowMessageController } from 'src/modules/app/controllers/show-message.controller';
import { GetHelloService } from 'src/modules/app/services/get-hello.service';
import { ShowMessageService } from 'src/modules/app/services/show-message.service';
import appConfig from './shared/config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
      envFilePath: ['.env'],
    }),
  ],
  controllers: [GetHelloController, ShowMessageController],
  providers: [GetHelloService, ShowMessageService],
})

// eslint-disable-next-line prettier/prettier
export class AppModule {}
