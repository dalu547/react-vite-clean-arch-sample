import { z } from 'zod'

const Env = z.object({
  VITE_API_BASE_URL: z.string().url(),
  VITE_USE_FAKE_API: z.enum(['true', 'false']).optional(),
})

export const env = Env.parse(import.meta.env)
export const API_BASE_URL = env.VITE_API_BASE_URL
export const USE_FAKE_API = env.VITE_USE_FAKE_API === 'true'
