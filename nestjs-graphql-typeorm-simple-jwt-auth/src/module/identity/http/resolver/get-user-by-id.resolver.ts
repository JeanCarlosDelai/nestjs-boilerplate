import { Args, Query, Resolver } from '@nestjs/graphql';
import { UserOutputDto } from '@src/module/identity/http/dto/user-management/user-output.dto';
import { UserInputDto } from '@src/module/identity/http/dto/user-management/get-user-by-id/user-id-input.dto';
import { GetUserByIdUseCase } from '@src/module/identity/core/usecases/user-management/get-user-by-id.usecase';

@Resolver(() => UserOutputDto)
export class GetUserByIdResolver {
  constructor(private readonly getUserByIdUseCase: GetUserByIdUseCase) {}

  @Query(() => UserOutputDto)
  getUserById(@Args() { id }: UserInputDto): Promise<UserOutputDto> {
    return this.getUserByIdUseCase.execute(id);
  }
}
