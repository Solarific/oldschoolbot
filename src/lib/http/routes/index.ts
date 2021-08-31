import type { FastifyServer } from '../types';
import { commandsRoute } from './commands';
import { minigamesGetRoute } from './hiscores/minigames';
import { skillsGetRoute } from './hiscores/skill';
import oauthCallbackRoute from './oauthCallback';
import root from './root';
import userSyncMe from './user/sync';
import githubSponsors from './webhooks/githubSponsors';

export const initRoutes = (server: FastifyServer) =>
	[root, githubSponsors, minigamesGetRoute, skillsGetRoute, oauthCallbackRoute, userSyncMe, commandsRoute].map(
		route => route(server)
	);
