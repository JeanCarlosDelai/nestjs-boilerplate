import { Module } from '@nestjs/common';
import { PersistenceModule } from './persistance/persistence.module';
import { ConfigModule } from '@src/shared/module/config/config.module';
import { GetUserByIdUseCase } from './core/usecases/user-management/get-user-by-id.usecase';
import { CreateUserUseCase } from './core/usecases/user-management/create-user.usecase';
import { CreateUserResolver } from './http/resolver/create-user.resolver';
import { GetUserByIdResolver } from './http/resolver/get-user-by-id.resolver';
import { HashService } from './core/service/hash.service';

@Module({
  imports: [PersistenceModule.forRoot(), ConfigModule.forRoot()],
  providers: [
    HashService,

    GetUserByIdUseCase,
    GetUserByIdResolver,
    CreateUserUseCase,
    CreateUserResolver
  ]
})
export class IdentityModule {}
