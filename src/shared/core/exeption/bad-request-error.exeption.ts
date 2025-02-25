import { BAD_REQUEST } from '../constant/errors.consts';
import { HttpStatusCode } from '../enum/http-status-codes.enum';
import { DefaultError } from './default-error.abstract.exception';

export class BadRequestError extends DefaultError {
  constructor(message: string) {
    super(message, HttpStatusCode.BAD_REQUEST, BAD_REQUEST);
  }
}
