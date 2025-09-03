import type { UserRepo } from './ports/user-repo'
export class ListUsers {
  constructor(private readonly repo: UserRepo) {}
  execute() { return this.repo.getAll() }
}
