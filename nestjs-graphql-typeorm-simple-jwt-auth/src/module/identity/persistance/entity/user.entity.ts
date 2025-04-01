import { DefaultEntity } from '@src/shared/module/persistance/typeorm/entity/default.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'User' })
export class User extends DefaultEntity<User> {
  @Column({ type: 'varchar', nullable: false })
  firstName: string;

  @Column({ type: 'varchar', nullable: false })
  lastName: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;
}
