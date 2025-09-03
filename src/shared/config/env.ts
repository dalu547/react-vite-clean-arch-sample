import { z } from 'zod'

const Env = z.object({
  VITE_API_BASE_URL: z.string().url(),
})

export const env = Env.parse(import.meta.env)
export const API_BASE_URL = env.VITE_API_BASE_URL
