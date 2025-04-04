import { Context, Query, Resolver } from '@nestjs/graphql';
import { UserOutputDto } from '@src/module/identity/http/dto/user-management/user-output.dto';
import { GetUserByIdUseCase } from '@src/module/identity/core/usecases/user-management/get-user-by-id.usecase';
import { UseGuards } from '@nestjs/common';
import {
  AuthenticatedRequest,
  AuthGuard
} from '@src/module/identity/http/guard/auth.guard';

@Resolver(() => UserOutputDto)
export class GetUserByIdResolver {
  constructor(private readonly getUserByIdUseCase: GetUserByIdUseCase) {}

  @UseGuards(AuthGuard)
  @Query(() => UserOutputDto)
  getProfile(
    @Context('req')
    req: AuthenticatedRequest
  ): Promise<UserOutputDto> {
    return this.getUserByIdUseCase.execute(req.user.id);
  }
}
