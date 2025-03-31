import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  BadRequestException
} from '@nestjs/common';
import { DefaultError } from '@src/shared/core/exception/default-error.abstract.exception';
import { Response } from 'express';
import { AppLogger } from '@src/shared/infra/logger/app-logger.service';
import { INTERNAL_SERVER_ERROR } from '@src/shared/core/constant/errors.consts';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  constructor(private readonly logger: AppLogger) {}

  catch(exception: DefaultError | BadRequestException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const caller = exception.stack?.split('\n')[1].trim().split(' ')[1];
    const originClass = caller?.split('.')[0];
    const originMethod = caller?.split('.').slice(1).join('.');

    if (exception instanceof DefaultError) {
      const { message, error, statusCode, stack } = exception;

      this.logger.error(
        message,
        { stack },
        {
          originClass: originClass ?? AllExceptionFilter.name,
          originMethod: originMethod ?? 'catch'
        }
      );

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
          message: 'Internal Server Error',
          error: INTERNAL_SERVER_ERROR,
          statusCode: 500
        });
      } else {
        response.status(statusCode).json({
          message,
          error: error,
          statusCode: statusCode
        });
      }
    }

    if (exception instanceof BadRequestException) {
      this.logger.error(
        exception.message,
        { stack: exception.stack },
        {
          originClass: originClass ?? AllExceptionFilter.name,
          originMethod: originMethod ?? 'catch'
        }
      );

      response.status(500).json(exception.getResponse());
    }
  }
}
