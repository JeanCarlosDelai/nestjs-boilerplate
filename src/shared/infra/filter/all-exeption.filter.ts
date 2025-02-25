import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { DefaultError } from '@src/shared/core/exeption/default-error.abstract.exception';
import { Response } from 'express';
import { AppLogger } from '../logger/service/app-logger.service';
import { INTERNAL_SERVER_ERROR } from '@src/shared/core/constant/errors.consts';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  constructor(private readonly logger: AppLogger) {}

  catch(exception: DefaultError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const { message, error, statusCode, stack } = exception;

    const caller = exception.stack?.split('\n')[1].trim().split(' ')[1];
    const originClass = caller?.split('.')[0];
    const originMethod = caller?.split('.').slice(1).join('.');

    this.logger.error(
      message,
      { stack },
      {
        originClass: originClass ?? AllExceptionFilter.name,
        originMethod: originMethod ?? 'catch'
      }
    );

    if (!statusCode || statusCode == 500) {
      response.status(500).json({
        statusCode: 500,
        error: INTERNAL_SERVER_ERROR,
        message: 'Internal Server Error'
      });
    } else {
      response.status(statusCode).json({
        statusCode: statusCode,
        error: error,
        message
      });
    }
  }
}
