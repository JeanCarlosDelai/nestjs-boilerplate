import { Injectable } from '@nestjs/common';
import { hash, compare } from 'bcrypt';
import { ConfigService } from '@src/shared/module/config/config.service';

@Injectable()
export class HashService {
  constructor(private readonly configService: ConfigService) {}

  async hash(password: string): Promise<string> {
    return await hash(password, this.configService.get('salt.password_hash_salt'));
  }

  async compare(password: string, actualPassword: string): Promise<boolean> {
    return await compare(password, actualPassword);
  }
}
