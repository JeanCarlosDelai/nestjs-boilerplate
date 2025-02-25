import { BAD_REQUEST } from '@src/shared/core/constant/errors.consts';
import { HttpStatusCode } from '@src/shared/core/enum/http-status-codes.enum';
import { DefaultError } from './default-error.abstract.exception';

export class BadRequestError extends DefaultError {
  constructor(message: string) {
    super(message, HttpStatusCode.BAD_REQUEST, BAD_REQUEST);
  }
}
