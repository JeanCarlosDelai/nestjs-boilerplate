import { IsNotEmpty, IsString } from 'class-validator';
import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class CreateUserInputDto {
  @IsString()
  @IsNotEmpty()
  @Field()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  password: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  lastName: string;
}
