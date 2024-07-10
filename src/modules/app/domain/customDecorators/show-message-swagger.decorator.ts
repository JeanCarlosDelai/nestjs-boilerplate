import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Messages } from '../enums/messages.enum';
export function ShowMessageSwaggerDecorator() {
  return applyDecorators(
    ApiTags('app'),
    ApiOperation({
      summary: 'Post message',
    }),
    ApiResponse({
      description: 'Show message',
      status: 201,
      schema: {
        example: {
          message: Messages.HELLO_WORLD,
        },
      },
    })
  );
}
