import type { User, UserId } from '../../domain/user'

export interface UserRepo {
  getAll(): Promise<User[]>
  getById(id: UserId): Promise<User>
  create(input: { name: string; email: string }): Promise<User>
}
