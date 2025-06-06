// import { Model } from 'mongoose';



export type TLostItem = {
  title: string;
  description?: string;
  category: 'ID Card' | 'Phone' | 'Laptop' | 'Other';
  status?: 'lost' | 'found'; // Defaults to 'lost'
  image?: string;
};

// export interface StudentModel extends Model<TLostItem> {
//   isLostItemExist(id: string): Promise<TLostItem | null>;
// }