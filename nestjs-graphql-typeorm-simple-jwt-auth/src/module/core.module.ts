import { Module } from '@nestjs/common';
import { IdentityModule } from './identity/identity.module';
import { AppModule } from './app/app.module';

@Module({
  imports: [IdentityModule, AppModule]
})
export class CoreModule {}
