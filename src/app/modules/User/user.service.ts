/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from "./user.model";

 
 

const createStudentIntoDB = async (password: string, student: any) => {
  const result = await User.create(student);
  return result;
}

export const UserServices = {
  createStudentIntoDB,
};