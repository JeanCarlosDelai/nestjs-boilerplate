import { Module } from '@nestjs/common';
import { CoreModule } from './module/app/core.module';
import { ConfigModule } from './shared/infra/config/config.module';
import { CustomGraphQLModule } from './shared/infra/graphql/custom-graphql.module';

@Module({
  imports: [ConfigModule.forRoot(), CustomGraphQLModule.register(), CoreModule]
})
export class AppModule {}
