import React, { createContext, useContext, useMemo } from 'react'
import type { UserRepo } from '@core/usecases/ports/user-repo'
import { ListUsers } from '@core/usecases/list-users'
import { CreateUser } from '@core/usecases/create-user'
import { HttpUserRepo } from '@data/repositories/http-user-repo'
import { UserRepoImpl } from '@data/repositories/user-repo-impl'
import { USE_FAKE_API } from '@shared/config/env'

type Services = {
  userRepo: UserRepo
  listUsers: ListUsers
  createUser: CreateUser
}

const ServicesContext = createContext<Services | null>(null)

export function ServiceProvider({ children }: { children: React.ReactNode }) {
  const services = useMemo<Services>(() => {
    const userRepo: UserRepo = USE_FAKE_API ? new UserRepoImpl() : new HttpUserRepo()
    const listUsers = new ListUsers(userRepo)
    const createUser = new CreateUser(userRepo)
    return { userRepo, listUsers, createUser }
  }, [])

  return <ServicesContext.Provider value={services}>{children}</ServicesContext.Provider>
}

export function useServices() {
  const ctx = useContext(ServicesContext)
  if (!ctx) throw new Error('Services not available: wrap app with <ServiceProvider>')
  return ctx
}
