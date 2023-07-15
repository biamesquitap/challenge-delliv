import { prisma } from '../lib/prisma'
import { checkSessionIdExists } from '../middlewares/check-session-id-exists'
import { randomUUID } from 'crypto'
import { FastifyInstance } from 'fastify'
import { z } from 'zod'

export async function usersRoutes(app: FastifyInstance) {
  app.get(
    '/',
    {
      preHandler: [checkSessionIdExists],
    },
    async (request) => {
      const getProductBodySchema = z.object({
        type: z.string(),
        userId: z.string(),
      })

      const { type, userId } = getProductBodySchema.parse(request.body)

      const user = await prisma.user.findUnique({
        where: {
          userId,
        },
      })

      const users = await prisma.product.findMany({
        where: {
          session_id: sessionId,
        },
      })
      console.log(sessionId)

      return users
    },
  )

  app.get(
    '/:id',
    {
      preHandler: [checkSessionIdExists],
    },
    async (request) => {
      const getUserParamsSchema = z.object({
        id: z.string().uuid(),
      })

      const { id } = getUserParamsSchema.parse(request.params)

      const { sessionId } = request.cookies

      const user = await prisma.user.findUnique({
        where: {
          id,
          session_id: sessionId,
        },
      })

      return { user }
    },
  )

  app.post('/', async (request, reply) => {
    const createUserBodySchema = z.object({
      name: z.string(),
      email: z.string().email({ message: 'Digite um email válido!' }),
      password: z.string().min(6).max(32),
    })

    const { name, email, password } = createUserBodySchema.parse(request.body)

    let sessionId = request.cookies.sessionId

    if (!sessionId) {
      sessionId = randomUUID()

      reply.cookie('sessionId', sessionId, {
        path: '/',
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      })
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password_hash: password,
        session_id: sessionId,
      },
    })

    return reply.status(201).send({ user })
  })

  app.delete(
    '/:id',
    {
      preHandler: [checkSessionIdExists],
    },
    async (request, reply) => {
      const getUserParamsSchema = z.object({
        id: z.string().uuid(),
      })

      const { id } = getUserParamsSchema.parse(request.params)
      const { sessionId } = request.cookies

      try {
        const user = await prisma.user.findUnique({
          where: {
            id,
            session_id: sessionId,
          },
        })

        if (!user) {
          reply.code(404).send({ error: 'User not found' })
          return
        }

        await prisma.user.delete({
          where: {
            id,
          },
        })

        reply.send({ message: 'User deleted successfully' })
      } catch (error) {
        reply.code(500).send({ error: 'Internal server error' })
      }
    },
  )
}
