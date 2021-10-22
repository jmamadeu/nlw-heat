import { Request, Response } from 'express';
import { GetLastThreeMessagesService } from '../services/GetLastThreeMessagesService';

class GetLastThreeMessagesController {
  async handle(request: Request, response: Response) {
    try {
      const service = new GetLastThreeMessagesService();
      const messages = await service.execute();

      return response.json(messages);
    } catch (err: any) {
      response.status(400).json({ errorCode: err.message });
    }
  }
}

export { GetLastThreeMessagesController };
