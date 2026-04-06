import { HttpStatusCode } from "./HttpStatusCode";

export class AppError extends Error {
  constructor(
    message: string,
    public statusCode = HttpStatusCode.INTERNAL_SERVER_ERROR,
  ) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class NotFoundException extends AppError {
  constructor(message: string) {
    super(message, HttpStatusCode.NOT_FOUND);
  }
}

export class BadRequestException extends AppError {
  constructor(message: string) {
    super(message, HttpStatusCode.BAD_REQUEST);
  }
}

export class UnauthorizedException extends AppError {
  constructor(message: string) {
    super(message, HttpStatusCode.UNAUTHORIZED);
  }
}

export class ConflictException extends AppError {
  constructor(message: string) {
    super(message, HttpStatusCode.CONFLICT);
  }
}
