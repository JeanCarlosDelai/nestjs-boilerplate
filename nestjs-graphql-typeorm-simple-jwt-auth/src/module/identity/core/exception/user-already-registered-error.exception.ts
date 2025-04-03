import { USER_ALREADY_REGISTERED } from '@src/module/identity/core/constant/identity-errors.consts';
import { HttpStatusCode } from '@src/shared/core/enum/http-status-codes.enum';
import { DefaultError } from '@src/shared/core/exception/default-error.abstract.exception';

export class UserAlreadyRegisteredError extends DefaultError {
  constructor(message: string) {
    super(message, HttpStatusCode.BAD_REQUEST, USER_ALREADY_REGISTERED);
  }
}
