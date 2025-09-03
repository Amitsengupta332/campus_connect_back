import { Request, Response } from 'express';

import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { AuthService } from './auth.service';

const registerUser = async (req: Request, res: Response) => {
  const result = await AuthService.registerUser(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'User registered successfully',
    data: result,
  });
};

const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const { user, token } = await AuthService.loginUser(email, password);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Login successful',
    data: { user, token },
  });
};

export const AuthController = {
  registerUser,
  loginUser,
};
