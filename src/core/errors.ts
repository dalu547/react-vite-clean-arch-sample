export class NotFoundError extends Error {
  constructor(message = 'Resource not found') {
    super(message)
    this.name = 'NotFoundError'
  }
}

export class ValidationError extends Error {
  details?: unknown
  constructor(message = 'Validation failed', details?: unknown) {
    super(message)
    this.name = 'ValidationError'
    this.details = details
  }
}

export class UnauthorizedError extends Error {
  constructor(message = 'Unauthorized') {
    super(message)
    this.name = 'UnauthorizedError'
  }
}

export class ForbiddenError extends Error {
  constructor(message = 'Forbidden') {
    super(message)
    this.name = 'ForbiddenError'
  }
}

export class ConflictError extends Error {
  constructor(message = 'Conflict') {
    super(message)
    this.name = 'ConflictError'
  }
}

export class NetworkError extends Error {
  constructor(message = 'Network error') {
    super(message)
    this.name = 'NetworkError'
  }
}

export class TimeoutError extends Error {
  constructor(message = 'Request timed out') {
    super(message)
    this.name = 'TimeoutError'
  }
}

export class UnexpectedError extends Error {
  constructor(message = 'Unexpected error') {
    super(message)
    this.name = 'UnexpectedError'
  }
}

