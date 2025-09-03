import type { UserRepo } from '@core/usecases/ports/user-repo'
import type { User } from '@core/domain/user'
import { api } from '@shared/config/api'
import { toUser, type UserDTO, fromUserInput } from '@data/dtos/user-dto'
import { mapAxiosError } from '@data/errors/map-axios-error'

export class HttpUserRepo implements UserRepo {
  async getAll(): Promise<User[]> {
    try {
      const { data } = await api.get<UserDTO[]>('/users')
      return data.map(toUser)
    } catch (err) {
      throw mapAxiosError(err, 'Failed to fetch users')
    }
  }
  async getById(id: string): Promise<User> {
    try {
      const { data } = await api.get<UserDTO>(`/users/${id}`)
      return toUser(data)
    } catch (err) {
      throw mapAxiosError(err, 'Failed to fetch user')
    }
  }
  async create(input: { name: string; email: string }): Promise<User> {
    try {
      const { data } = await api.post<UserDTO>('/users', fromUserInput(input))
      return toUser(data)
    } catch (err) {
      throw mapAxiosError(err, 'Failed to create user')
    }
  }
}
