import { ForbiddenError } from '../../forbidden-error.exeption';

describe('ForbiddenError', () => {
  it('should have the correct message, status code, and error type', () => {
    const message = 'Invalid request';
    const expectedResponse = new Error(message);

    const error = new ForbiddenError(message);

    expect(error).toEqual(expectedResponse);
    expect(error).toBeInstanceOf(ForbiddenError);
  });
});
