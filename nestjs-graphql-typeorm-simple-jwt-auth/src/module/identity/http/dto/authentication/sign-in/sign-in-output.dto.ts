import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SignInOutputDto {
  @Field()
  accessToken: string;

  constructor(userOutput: SignInOutputDto) {
    Object.assign(this, userOutput);
  }
}
