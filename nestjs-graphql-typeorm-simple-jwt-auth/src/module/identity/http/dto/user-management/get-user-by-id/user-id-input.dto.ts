import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class UserInputDto {
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  @Field()
  id: string;
}
