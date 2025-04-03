import { Injectable } from '@nestjs/common';
import { UserOutputDto } from '@src/module/identity/http/dto/user-management/user-output.dto';
import { UserRepository } from '@src/module/identity/persistance/repository/user.repository';
import { UserNotFoundError } from '@src/module/identity/core/exception/user-not-found-error.exception';

@Injectable()
export class GetUserByIdUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: string): Promise<UserOutputDto> {
    const user = await this.userRepository.findOneBy({ where: { id } });

    if (!user) {
      throw new UserNotFoundError(`User with id: ${id} not found`);
    }

    return new UserOutputDto(user);
  }
}
