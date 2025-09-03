import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { loginUserZodSchema, registerUserZodSchema } from './auth.validation';
import { AuthController } from './auth.controller';

const router = express.Router();

router.post(
  '/register',
  validateRequest(registerUserZodSchema),
  AuthController.registerUser,
);

router.post(
  '/login',
  validateRequest(loginUserZodSchema),
  AuthController.loginUser,
);

export const AuthRoutes = router;
