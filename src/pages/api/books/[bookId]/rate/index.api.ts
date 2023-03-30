/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/libs/prisma'

// import { buildNextAuthOptions } from '../../auth/[...nextauth]'
import { bodySchema, querySchema, sessionSchema } from './schema'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()

  const session: { user: { id: string } } | null = null

  // await getServerSession(req, res, buildNextAuthOptions(req, res))

  if (!session) return res.status(401).end()

  try {
    const {
      user: { id: user_id },
    } = sessionSchema.parse(session)

    const { bookId: book_id } = querySchema.parse(req.query)
    const { description, rate } = bodySchema.parse(req.body)

    const userAlreadyRated = await prisma.rating.findFirst({ where: { user_id, book_id } })

    if (userAlreadyRated) {
      return res.status(400).json({ error: 'You already rated this book' })
    }

    await prisma.rating.create({ data: { book_id, description, rate, user_id } })

    return res.status(201).end()
  } catch (error) {
    console.error(error)
    return res.status(400).end()
  }
}
