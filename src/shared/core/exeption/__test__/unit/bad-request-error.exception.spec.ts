import { BadRequestError } from '../../bad-request-error.exeption';

describe('BadRequestError', () => {
  it('should have the correct message, status code, and error type', () => {
    const message = 'Invalid request';
    const expectedResponse = new Error(message);

    const error = new BadRequestError(message);

    expect(error).toEqual(expectedResponse);
    expect(error).toBeInstanceOf(BadRequestError);
  });
});
