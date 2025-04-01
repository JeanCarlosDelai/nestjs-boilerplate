import { Inject, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class TransactionManagerService {
  user: UserRepository;

  constructor(@Inject(DataSource) readonly dataSource: DataSource) {}

  async executeWithinTransaction<T>(work: () => Promise<T>): Promise<T> {
    // Start a transaction
    return this.dataSource.transaction(async (transactionManager) => {
      // Re-init repositories with the transaction-aware manager.
      this.user = new UserRepository(transactionManager);

      // Execute the work. If this throws, the transaction is rolled back.
      return work();
    });
  }
}
