import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule } from '@src/shared/module/config/config.module';
import { TypeOrmPersistenceModule } from '@src/shared/module/persistance/typeorm/typeorm-persistence.module';
import { DataSource } from 'typeorm';
import { User } from './entity/user.entity';
import { UserRepository } from './repository/user.repository';
import { TransactionManagerService } from './transaction-manager.service';

@Module({})
export class PersistenceModule {
  static forRoot(opts?: { migrations?: string[] }): DynamicModule {
    const { migrations } = opts || {};
    return {
      module: PersistenceModule,
      imports: [
        TypeOrmPersistenceModule.forRoot({
          migrations,
          entities: [User]
        }),
        ConfigModule.forRoot()
      ],
      providers: [
        {
          provide: UserRepository,
          useFactory: (dataSource: DataSource) => {
            return new UserRepository(dataSource.manager);
          },
          inject: [DataSource]
        },
        TransactionManagerService
      ],
      exports: [UserRepository, TransactionManagerService]
    };
  }
}
