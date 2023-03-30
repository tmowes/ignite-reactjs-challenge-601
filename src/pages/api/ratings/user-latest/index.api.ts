import { NextApiRequest, NextApiResponse } from 'next'
// import { getServerSession } from 'next-auth'

import { prisma } from '@/libs/prisma'

import { sessionSchema } from './schema'

// import { buildNextAuthOptions } from '../auth/[...nextauth]'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).end()

  // const session = await getServerSession(req, res, buildNextAuthOptions(req, res))

  const session: { user: { id: string } } | null = null

  if (!session) return res.status(401).end()

  const {
    user: { id: user_id },
  } = sessionSchema.parse(session)

  const latestUserRating = await prisma.rating.findFirst({
    where: { user_id },
    orderBy: { created_at: 'desc' },
    include: { book: true },
  })

  return res.json({ rating: latestUserRating })
}
