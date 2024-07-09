import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ShowMessageInputDto {
  @ApiProperty({ type: String, default: 'Your message Here' })
  @IsString()
  @IsNotEmpty()
  readonly message: string;
}
