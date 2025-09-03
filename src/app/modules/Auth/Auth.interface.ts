export type TUser = {
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';    
  status?: 'active' | 'blocked';
  isDeleted?: boolean;
};
