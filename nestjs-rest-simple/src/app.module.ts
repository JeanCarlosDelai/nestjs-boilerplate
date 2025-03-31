import { Module } from '@nestjs/common';
import { CoreModule } from './module/app/core.module';
import { ConfigModule } from './shared/infra/config/config.module';

@Module({
  imports: [CoreModule, ConfigModule.forRoot()]
})
export class AppModule {}
