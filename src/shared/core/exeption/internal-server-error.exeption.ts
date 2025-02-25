import { INTERNAL_SERVER_ERROR } from '../constant/errors.consts';
import { HttpStatusCode } from '../enum/http-status-codes.enum';
import { DefaultError } from './default-error.abstract.exception';

export class InternalServerError extends DefaultError {
  constructor(message: string) {
    super(message, HttpStatusCode.INTERNAL_SERVER_ERROR, INTERNAL_SERVER_ERROR);
  }
}
