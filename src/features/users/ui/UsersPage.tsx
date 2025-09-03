import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useUsers } from '../hooks/useUsers'

const Schema = z.object({
  name: z.string().min(2, 'Name is too short'),
  email: z.string().email()
})
type FormValues = z.infer<typeof Schema>

export default function UsersPage() {
  const { users, create } = useUsers()
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(Schema),
    defaultValues: { name: '', email: '' }
  })

  const onSubmit = async (values: FormValues) => {
    await create.mutateAsync(values)
    reset()
  }

  if (users.isLoading) return <div>Loading users…</div>
  if (users.error) return <div className="text-red-600">Failed to load users</div>

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Users</h2>
        <ul className="bg-white rounded-xl border divide-y">
          {users.data?.map(u => (
            <li key={u.id} className="p-3">
              <div className="font-medium">{u.name}</div>
              <div className="text-sm text-gray-600">{u.email}</div>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Create User</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl border p-4 space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input className="w-full h-9 rounded-xl border px-3" placeholder="Jane Doe" {...register('name')} />
            {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input className="w-full h-9 rounded-xl border px-3" placeholder="jane@company.com" {...register('email')} />
            {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
          </div>
          <button disabled={isSubmitting} className="h-9 px-4 rounded-xl bg-brand text-brand-fg disabled:opacity-50">
            {create.isPending ? 'Saving…' : 'Save'}
          </button>
          {create.error && <p className="text-sm text-red-600">Failed to save user</p>}
        </form>
      </section>
    </div>
  )
}
