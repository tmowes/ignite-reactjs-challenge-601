import { z } from 'zod'

export const querySchema = z.object({ userId: z.coerce.string() })
