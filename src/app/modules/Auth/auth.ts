/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import config from "../../config";

// Extend Express Request to include user
declare module "express-serve-static-core" {
  interface Request {
    user?: JwtPayload | string;
  }
}

export const auth = (roles: string[] = []) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      // get token from header
      const token = req.headers.authorization;
      //!authHeader.startsWith("Bearer")
      console.log('auth header', token);
      if (!token)  {
        throw new AppError(httpStatus.UNAUTHORIZED, "Authorization token missing");
        // return res.status(httpStatus.UNAUTHORIZED).json({
        //   success: false,
        //   message: "Authorization token missing",
        // });
      }

      // const token = authHeader?.split(" ")[1];

      // console.log('token',token);

      // verify token
      const decoded = jwt.verify(
        token,
       config.jwt_access_secret as string
      ) as JwtPayload;

      console.log('decoded', decoded);

      req.user = decoded; // attach user to request

      // role-based check
      if (roles.length && !roles.includes(decoded.role)) {
        return res.status(httpStatus.FORBIDDEN).json({
          success: false,
          message: "You do not have permission to perform this action",
        });
      }

      next();
    } catch (err) {
      return res.status(httpStatus.UNAUTHORIZED).json({
        success: false,
        message: "Invalid or expired token",
      });
    }
  };
};
