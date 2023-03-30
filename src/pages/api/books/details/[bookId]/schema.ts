import { z } from 'zod'

export const querySchema = z.object({ bookId: z.coerce.string() })
