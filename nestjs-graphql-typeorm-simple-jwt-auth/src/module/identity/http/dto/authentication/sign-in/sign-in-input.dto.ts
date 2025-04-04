import { InputType, PickType } from '@nestjs/graphql';
import { CreateUserInputDto } from '@src/module/identity/http/dto/user-management/create-user/create-user-input.dto';

@InputType()
export class SignInInputDto extends PickType(CreateUserInputDto, [
  'email',
  'password'
] as const) {}
