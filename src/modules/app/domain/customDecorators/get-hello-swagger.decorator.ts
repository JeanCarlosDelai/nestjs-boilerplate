import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Messages } from '../enums/messages.enum';
export function GetHelloSwaggerDecorator() {
  return applyDecorators(
    ApiTags('app'),
    ApiOperation({
      summary: 'Get Hello World',
    }),
    ApiResponse({
      description: 'Show Hello World',
      status: 200,
      schema: {
        example: {
          message: Messages.HELLO_WORLD,
        },
      },
    }),
  );
}
