// import { Model } from 'mongoose';

import { Types } from "mongoose";

// export type TLostItem = {
//   title: string;
//   description?: string;
//   category: 'ID Card' | 'Phone' | 'Laptop' | 'Other';
//   status?: 'lost' | 'found'; // Defaults to 'lost'
//   image?: string;
// };

export type TItem = {
  title: string;
  description: string;
  category:
    | 'ID Card'
    | 'Phone'
    | 'Laptop'
    | 'Book'
    | 'Wallet'
    | 'Charger'
    | 'Other';
  status: 'lost' | 'found'; // default 'lost'
  image?: string;
  date?: string;
   user: Types.ObjectId; 
};

// export type TLostItem = {
//   title: string;
//   description: string; // Required (clear details)
//   category: 'ID Card' | 'Phone' | 'Laptop' | 'Book' | 'Wallet' | 'Charger' | 'Other';
//   status: 'lost' | 'found'; // Default 'lost'
//   image?: string;
//   date?: string; // (optional) posted date
// };

// export interface StudentModel extends Model<TLostItem> {
//   isLostItemExist(id: string): Promise<TLostItem | null>;
// }
