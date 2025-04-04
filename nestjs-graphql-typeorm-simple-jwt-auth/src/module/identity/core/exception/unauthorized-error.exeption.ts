import { UNAUTHORIZED } from '@src/shared/core/constant/errors.consts';
import { HttpStatusCode } from '@src/shared/core/enum/http-status-codes.enum';
import { DefaultError } from '@src/shared/core/exception/default-error.abstract.exception';

export class UnauthorizedError extends DefaultError {
  constructor(message: string) {
    super(message, HttpStatusCode.UNAUTHORIZED, UNAUTHORIZED);
  }
}
