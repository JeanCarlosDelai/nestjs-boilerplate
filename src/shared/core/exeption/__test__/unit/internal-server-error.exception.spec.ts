import { InternalServerError } from '@src/shared/core/exeption/internal-server-error.exeption';

describe('InternalServerError', () => {
  it('should have the correct message, status code, and error type', () => {
    const message = 'Invalid request';
    const expectedResponse = new Error(message);

    const error = new InternalServerError(message);

    expect(error).toEqual(expectedResponse);
    expect(error).toBeInstanceOf(InternalServerError);
  });
});
