import { HttpStatus, ResponseCode } from '../types/api';

export class AppError extends Error {
  public readonly statusCode: HttpStatus;
  public readonly code: ResponseCode;

  constructor(
    message: string,
    code: ResponseCode = ResponseCode.BAD_REQUEST,
    statusCode: HttpStatus = HttpStatus.BAD_REQUEST
  ) {
    super(message);
    this.name = 'AppError';
    this.statusCode = statusCode;
    this.code = code;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
