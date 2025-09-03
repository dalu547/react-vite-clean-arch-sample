import type { UserRepo } from '@core/usecases/ports/user-repo'
import { User } from '@core/domain/user'

export class UserRepoImpl implements UserRepo {
  private db: User[] = [
    new User('1', 'Ada Lovelace', 'ada@example.com'),
    new User('2', 'Alan Turing', 'alan@example.com'),
  ]

  async getAll(): Promise<User[]> {
    await delay(150)
    return [...this.db]
  }

  async getById(id: string): Promise<User> {
    await delay(100)
    const found = this.db.find(u => u.id === id)
    if (!found) throw new Error('User not found')
    return found
  }

  async create(input: { name: string; email: string }): Promise<User> {
    await delay(200)
    const id = String(this.db.length + 1)
    const user = new User(id, input.name, input.email)
    this.db.push(user)
    return user
  }
}

function delay(ms: number) { return new Promise(res => setTimeout(res, ms)) }
