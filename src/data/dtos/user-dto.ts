import { User } from '@core/domain/user'

export type UserDTO = { id: string; name: string; email: string }
export const toUser = (dto: UserDTO) => new User(dto.id, dto.name, dto.email)
export const fromUserInput = (input: { name: string; email: string }) => ({ name: input.name, email: input.email })
