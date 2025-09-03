export type UserId = string

export class User {
  constructor(public readonly id: UserId, public name: string, public email: string) {}
}
