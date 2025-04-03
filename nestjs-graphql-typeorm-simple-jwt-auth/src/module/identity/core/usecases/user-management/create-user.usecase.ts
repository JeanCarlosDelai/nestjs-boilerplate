import { Injectable } from '@nestjs/common';
import { UserRepository } from '@src/module/identity/persistance/repository/user.repository';
import { User } from '@src/module/identity/persistance/entity/user.entity';
import { CreateUserInputDto } from '@src/module/identity/http/dto/user-management/create-user/create-user-input.dto';
import { UserOutputDto } from '@src/module/identity/http/dto/user-management/user-output.dto';
import { UserAlreadyRegisteredError } from '@src/module/identity/core/exception/user-already-registered-error.exception';
import { HashService } from '@src/module/identity/core/service/hash.service';

@Injectable()
export class CreateUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hashService: HashService
  ) {}

  async execute(createUserInput: CreateUserInputDto): Promise<UserOutputDto> {
    const user = await this.userRepository.findOneBy({
      where: { email: createUserInput.email }
    });

    if (user) {
      throw new UserAlreadyRegisteredError(
        `User with email: ${createUserInput.email} already registered`
      );
    }

    const newUser = new User({
      ...createUserInput,
      password: await this.hashService.hash(createUserInput.password)
    });

    await this.userRepository.save(newUser);

    return new UserOutputDto(newUser);
  }
}
