import { HttpException } from '@nestjs/common';

export abstract class DefaultError extends HttpException {
  constructor(message: string, statusCode: number, code: string) {
    super(
      {
        code,
        message,
        statusCode
      },
      statusCode
    );
  }
}
