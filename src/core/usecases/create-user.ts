import type { UserRepo } from './ports/user-repo'
export class CreateUser {
  constructor(private readonly repo: UserRepo) {}
  execute(input: { name: string; email: string }) { return this.repo.create(input) }
}
