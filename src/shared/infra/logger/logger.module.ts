import { Global, Module } from '@nestjs/common';
import { AppLogger } from './service/app-logger.service';

@Global()
@Module({
  providers: [AppLogger],
  exports: [AppLogger]
})
export class LoggerModule {}
