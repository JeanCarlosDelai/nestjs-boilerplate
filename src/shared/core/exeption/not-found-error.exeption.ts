import { NOT_FOUND } from '../constant/errors.consts';
import { HttpStatusCode } from '../enum/http-status-codes.enum';
import { DefaultError } from './default-error.abstract.exception';

export class NotFoundError extends DefaultError {
  constructor(message: string) {
    super(message, HttpStatusCode.NOT_FOUND, NOT_FOUND);
  }
}
