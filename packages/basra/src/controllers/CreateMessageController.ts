import { Request, Response } from 'express';
import { CreateMessageService } from '../services/CreateMessageService';

class CreateMessageController {
  async handle(request: Request, response: Response) {
    const { message } = request.body;

    const { user_id } = request;

    const messageService = new CreateMessageService();

    const messageResponse = await messageService.execute(message, user_id);

    return response.json(messageResponse);
  }
}

export { CreateMessageController };
