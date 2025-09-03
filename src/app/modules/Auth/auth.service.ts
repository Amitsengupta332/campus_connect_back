/* eslint-disable @typescript-eslint/no-explicit-any */
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { User } from './auth.model';

const registerUser = async (userData: any) => {
  const user = new User(userData);
  await user.save();
  return user;
};

// const loginUser = async (email: string, password: string) => {
//   const user = await User.findOne({ email });
//   if (!user) throw new Error('User not found');

//   const isPasswordValid = await bcrypt.compare(password, user.password);
//   if (!isPasswordValid) throw new Error('Invalid credentials');

//   const token = jwt.sign(
//     { id: user._id, role: user.role },
//     process.env.JWT_SECRET as string,
//     { expiresIn: '1h' },
//   );

//   return { user, token };
// };

const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('User not found');

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) throw new Error('Invalid credentials');

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_ACCESS_SECRET as string,
    { expiresIn: '1h' },
  );

  return { user, token };
};


export const AuthService = {
  registerUser,
  loginUser,
};
