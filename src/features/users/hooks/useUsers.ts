import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useServices } from '@shared/di/ServiceProvider'

export function useUsers() {
  const { listUsers, createUser } = useServices()
  const qc = useQueryClient()
  const users = useQuery({ queryKey: ['users'], queryFn: () => listUsers.execute() })
  const create = useMutation({
    mutationFn: createUser.execute.bind(createUser),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['users'] })
  })
  return { users, create }
}
