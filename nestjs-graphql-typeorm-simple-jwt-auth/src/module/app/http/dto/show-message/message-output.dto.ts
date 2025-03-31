import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MessageOutputDto {
  @Field()
  readonly message: string;
}
