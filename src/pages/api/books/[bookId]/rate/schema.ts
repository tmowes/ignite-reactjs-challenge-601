import { z } from 'zod'

export const bodySchema = z.object({
  description: z.string().max(450),
  rate: z.number().min(1).max(5),
})

export const querySchema = z.object({ bookId: z.coerce.string() })

export const sessionSchema = z.object({ user: z.object({ id: z.coerce.string() }) })
