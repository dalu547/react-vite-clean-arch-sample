import type { UserRepo } from '@core/usecases/ports/user-repo'
import type { User } from '@core/domain/user'
import { api } from '@shared/config/api'
import { toUser, type UserDTO, fromUserInput } from '@data/dtos/user-dto'

export class HttpUserRepo implements UserRepo {
  async getAll(): Promise<User[]> {
    const { data } = await api.get<UserDTO[]>('/users')
    return data.map(toUser)
  }
  async getById(id: string): Promise<User> {
    const { data } = await api.get<UserDTO>(`/users/${id}`)
    return toUser(data)
  }
  async create(input: { name: string; email: string }): Promise<User> {
    const { data } = await api.post<UserDTO>('/users', fromUserInput(input))
    return toUser(data)
  }
}
