/* eslint-disable @typescript-eslint/no-explicit-any */
 

 
 

const createStudentIntoDB = async (password: string, student: any) => {
  const result = await Use.create(student);
  return result;
}

export const UserServices = {
  createStudentIntoDB,
};