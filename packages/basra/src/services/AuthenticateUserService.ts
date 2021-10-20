import axios from 'axios';
import { response } from 'express';

class AuthenticateUserService {
  async execute(code: string) {
    const githubAccessTokenURL = 'https://github.com/login/oauth/access_token';

    const githubAccessTokenResponse = await axios.post(
      githubAccessTokenURL,
      null,
      {
        params: {
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code,
        },
        headers: {
          Accept: 'application/json',
        },
      }
    );

    return githubAccessTokenResponse.data;
  }
}

export { AuthenticateUserService };
