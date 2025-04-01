import { Module } from '@nestjs/common';
import { ShowMessageResolver } from './http/resolver/show-message.resolver';
import { ShowMessageUseCase } from './core/usecase/show-message.usecase';
import { LoggerModule } from '@src/shared/module/logger/logger.module';

@Module({
  imports: [LoggerModule],
  providers: [ShowMessageUseCase, ShowMessageResolver]
})
export class CoreModule {}
