import { FORBIDDEN } from '@src/shared/core/constant/errors.consts';
import { HttpStatusCode } from '@src/shared/core/enum/http-status-codes.enum';
import { DefaultError } from './default-error.abstract.exception';

export class ForbiddenError extends DefaultError {
  constructor(message: string) {
    super(message, HttpStatusCode.FORBIDDEN, FORBIDDEN);
  }
}
