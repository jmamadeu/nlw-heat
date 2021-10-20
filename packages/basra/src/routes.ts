import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';

const router = Router();

router.post('/authenticate', new AuthenticateUserController().handle);

router.get('/signin/callback', (request, response) => {
  const { code } = request.query;

  response.json({ name: 'amadeu', code });
});

router.get('/github', (_, response) => {
  response.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  );
});

export { router };
