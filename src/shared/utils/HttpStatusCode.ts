export enum HttpStatusCode {
  // Success
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,

  // Redirection
  MOVED_PERMANENTLY = 301,

  // Client errors
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  CONFLICT = 409,
  UNPROCESSABLE_ENTITY = 422,

  // Server errors
  INTERNAL_SERVER_ERROR = 500,
}
