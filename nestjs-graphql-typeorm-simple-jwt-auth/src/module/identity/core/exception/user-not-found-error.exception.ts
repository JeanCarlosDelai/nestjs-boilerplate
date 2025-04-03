import { USER_NOT_FOUND } from '@src/module/identity/core/constant/identity-errors.consts';
import { HttpStatusCode } from '@src/shared/core/enum/http-status-codes.enum';
import { DefaultError } from '@src/shared/core/exception/default-error.abstract.exception';

export class UserNotFoundError extends DefaultError {
  constructor(message: string) {
    super(message, HttpStatusCode.NOT_FOUND, USER_NOT_FOUND);
  }
}
