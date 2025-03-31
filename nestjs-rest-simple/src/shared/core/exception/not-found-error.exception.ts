import { NOT_FOUND } from '@src/shared/core/constant/errors.consts';
import { HttpStatusCode } from '@src/shared/core/enum/http-status-codes.enum';
import { DefaultError } from './default-error.abstract.exception';

export class NotFoundError extends DefaultError {
  constructor(message: string) {
    super(message, HttpStatusCode.NOT_FOUND, NOT_FOUND);
  }
}
