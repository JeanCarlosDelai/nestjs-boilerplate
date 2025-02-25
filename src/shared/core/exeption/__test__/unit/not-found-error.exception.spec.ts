import { NotFoundError } from '../../not-found-error.exeption';

describe('NotFoundError', () => {
  it('should have the correct message, status code, and error type', () => {
    const message = 'Invalid request';
    const expectedResponse = new Error(message);

    const error = new NotFoundError(message);

    expect(error).toEqual(expectedResponse);
    expect(error).toBeInstanceOf(NotFoundError);
  });
});
