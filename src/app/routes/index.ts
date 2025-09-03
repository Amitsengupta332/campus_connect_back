import { Router } from 'express';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { ItemRoutes } from '../modules/LostAndFound/Lost.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/lost',
    route: ItemRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
