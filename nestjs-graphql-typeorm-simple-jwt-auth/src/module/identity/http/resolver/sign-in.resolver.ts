import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { SignInInputDto } from '@src/module/identity/http/dto/authentication/sign-in/sign-in-input.dto';
import { SignInUseCase } from '@src/module/identity/core/usecases/authentication/sign-in.usecase';
import { SignInOutputDto } from '@src/module/identity/http/dto/authentication/sign-in/sign-in-output.dto';

@Resolver(() => SignInOutputDto)
export class SignInResolver {
  constructor(private readonly signInUseCase: SignInUseCase) {}

  @Mutation(() => SignInOutputDto)
  signIn(@Args('user') payload: SignInInputDto): Promise<SignInOutputDto> {
    return this.signInUseCase.execute(payload);
  }
}
