import { IsNotEmpty, IsString } from 'class-validator';
import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class MessageInputDto {
  @IsString()
  @IsNotEmpty()
  @Field()
  readonly message: string;
}
