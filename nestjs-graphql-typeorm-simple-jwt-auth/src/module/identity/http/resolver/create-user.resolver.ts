import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateUserUseCase } from '@src/module/identity/core/usecases/user-management/create-user.usecase';
import { CreateUserInputDto } from '@src/module/identity/http/dto/user-management/create-user/create-user-input.dto';
import { UserOutputDto } from '@src/module/identity/http/dto/user-management/user-output.dto';

@Resolver(() => UserOutputDto)
export class CreateUserResolver {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Mutation(() => UserOutputDto)
  createUser(@Args() payload: CreateUserInputDto): Promise<UserOutputDto> {
    return this.createUserUseCase.execute(payload);
  }
}
