export class AppError extends Error {
  public readonly statusCode: number;
  public readonly code: number;

  constructor(message: string, code = 400, statusCode = 400) {
    super(message);
    this.name = 'AppError';
    this.statusCode = statusCode;
    this.code = code;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
