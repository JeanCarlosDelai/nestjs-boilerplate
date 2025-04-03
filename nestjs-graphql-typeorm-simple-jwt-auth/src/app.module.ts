import { Module } from '@nestjs/common';
import { CoreModule } from './module/core.module';
import { ConfigModule } from './shared/module/config/config.module';
import { CustomGraphQLModule } from './shared/module/graphql/custom-graphql.module';

@Module({
  imports: [ConfigModule.forRoot(), CustomGraphQLModule.register(), CoreModule]
})
export class AppModule {}
