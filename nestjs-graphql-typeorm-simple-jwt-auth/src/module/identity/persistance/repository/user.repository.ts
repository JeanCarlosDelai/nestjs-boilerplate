import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { DefaultTypeOrmRepository } from '@src/shared/module/persistance/typeorm/repository/default-typeorm.repository';
import { User } from '../entity/user.entity';

@Injectable()
export class UserRepository extends DefaultTypeOrmRepository<User> {
  constructor(readonly transactionalEntityManager: EntityManager) {
    super(User, transactionalEntityManager);
  }
}
