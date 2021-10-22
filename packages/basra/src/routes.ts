import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateMessageController } from './controllers/CreateMessageController';
import { GetLastThreeMessagesController } from './controllers/GetLastThreeMessagesController';
import { ProfileUserController } from './controllers/ProfileUserController';
import { ensureAuthenticated } from './middleware/ensureAuthenticated';
import { GetLastThreeMessagesService } from './services/GetLastThreeMessagesService';

const router = Router();

router.post('/authenticate', new AuthenticateUserController().handle);

router.post(
  '/messages',
  ensureAuthenticated,
  new CreateMessageController().handle
);

router.get('/messages/last3', new GetLastThreeMessagesController().handle);

router.get('/profile', ensureAuthenticated, new ProfileUserController().handle);

router.get('/signin/callback', (request, response) => {
  const { code } = request.query;

  response.json({ code });
});

router.get('/github', (_, response) => {
  response.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  );
});

export { router };
