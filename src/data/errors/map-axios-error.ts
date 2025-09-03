import axios from 'axios'
import {
  ConflictError,
  ForbiddenError,
  NetworkError,
  NotFoundError,
  TimeoutError,
  UnauthorizedError,
  UnexpectedError,
  ValidationError,
} from '@core/errors'

export function mapAxiosError(err: unknown, fallbackMessage?: string): Error {
  if (!axios.isAxiosError(err)) {
    return new UnexpectedError(fallbackMessage || 'Unexpected error')
  }

  const status = err.response?.status
  const code = err.code
  const data = err.response?.data as any

  // Network or timeout without HTTP response
  if (!status) {
    if (code === 'ECONNABORTED') return new TimeoutError('Request timed out')
    return new NetworkError('Network error')
  }

  // Map by status
  switch (status) {
    case 400:
      return new ValidationError('Validation failed', data?.errors ?? data)
    case 401:
      return new UnauthorizedError('Unauthorized')
    case 403:
      return new ForbiddenError('Forbidden')
    case 404:
      return new NotFoundError('Resource not found')
    case 409:
      return new ConflictError('Conflict')
    case 422:
      return new ValidationError('Unprocessable entity', data?.errors ?? data)
    default:
      return new UnexpectedError(fallbackMessage || (data?.message as string) || 'Unexpected error')
  }
}

