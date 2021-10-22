import { prismaClient } from '../prisma';

class GetLastThreeMessagesService {
  async execute() {
    const lastThreeMessages = prismaClient.message.findMany({
      take: 3,
      orderBy: {
        created_at: 'desc',
      },
      include: {
        user: true,
      },
    });

    return lastThreeMessages;
  }
}

export { GetLastThreeMessagesService };
