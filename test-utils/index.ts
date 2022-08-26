import { v4 as uuid } from 'uuid';
import prisma from '../src/client';

export const createUser = (email = `${uuid()}@test.com`) =>
  prisma.user.create({
    data: {
      email,
    },
  });
