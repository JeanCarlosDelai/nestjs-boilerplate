import { Module } from '@nestjs/common';
import { ShowMessageController } from './http/controller/show-message.controller';
import { ShowMessageUseCase } from './core/usecase/show-message.usecase';
import { LoggerModule } from '@src/shared/infra/logger/logger.module';

@Module({
  imports: [LoggerModule],
  controllers: [ShowMessageController],
  providers: [ShowMessageUseCase]
})
export class CoreModule {}
