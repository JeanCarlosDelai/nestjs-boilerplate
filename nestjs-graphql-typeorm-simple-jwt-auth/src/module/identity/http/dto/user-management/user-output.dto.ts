import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserOutputDto {
  @Field()
  id: string;

  @Field()
  email: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  constructor(userOutput: UserOutputDto) {
    Object.assign(this, userOutput);
  }
}
