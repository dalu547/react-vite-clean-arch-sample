import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { ListUsers } from '@core/usecases/list-users'
import { CreateUser } from '@core/usecases/create-user'
import { HttpUserRepo } from '@data/repositories/http-user-repo'

const repo = new HttpUserRepo()
const listUsersUC = new ListUsers(repo)
const createUserUC = new CreateUser(repo)

export function useUsers() {
  const qc = useQueryClient()
  const users = useQuery({ queryKey: ['users'], queryFn: () => listUsersUC.execute() })
  const create = useMutation({
    mutationFn: createUserUC.execute.bind(createUserUC),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['users'] })
  })
  return { users, create }
}
