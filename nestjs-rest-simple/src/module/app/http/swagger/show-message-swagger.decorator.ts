import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Message } from 'src/module/app/core/enum/message.enum';

export function ShowMessageSwaggerDecorator() {
  return applyDecorators(
    ApiTags('app'),
    ApiOperation({
      summary: 'Post message'
    }),
    ApiResponse({
      description: 'Show message',
      status: 201,
      schema: {
        example: {
          message: Message.HELLO_WORLD
        }
      }
    })
  );
}
