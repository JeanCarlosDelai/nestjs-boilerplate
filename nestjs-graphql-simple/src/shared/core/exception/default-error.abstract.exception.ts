export abstract class DefaultError extends Error {
  public statusCode: number;
  public error: string;

  constructor(message: string, statusCode: number, error: string) {
    super(message);
    this.statusCode = statusCode;
    this.error = error;
  }
}
