// import { model, Schema } from 'mongoose';
// import { TLostItem } from './Lost.interface';

import { model, Schema } from 'mongoose';
import { TItem } from './Lost.interface';
 

const ItemSchema = new Schema<TItem>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: {
    type: String,
    enum: ['ID Card', 'Phone', 'Laptop', 'Book', 'Wallet', 'Charger', 'Other'],
    required: true,
  },
  status: {
    type: String,
    enum: ['lost', 'found'],
    default: 'lost',
  },
  image: String,
  date: { type: String, default: new Date().toISOString() },
}, { timestamps: true });

export const Item = model<TItem>('Item', ItemSchema);


// const LostItemSchema = new Schema<TLostItem>({
//   title: { type: String, required: true },
//   description: String,
//   category: {
//     type: String,
//     enum: ['ID Card', 'Phone', 'Laptop', 'Book', 'Wallet', 'Charger', 'Other'],
//     required: true,
//   },
//   status: {
//     type: String,
//     enum: ['lost', 'found'],
//     default: 'lost',
//   },
//   image: String,
//   date: String,
// }, { timestamps: true });

// export const LostItem = model<TLostItem>('LostItem', LostItemSchema);

// new Schema<TLostItem>({

//     title: { type: String, required: true },
//     description: String,
//     category: {
//         type: String,
//         enum: ['ID Card', 'Phone', 'Laptop', 'Other'],
//         required: true
//     },
//     status: {
//         type: String,
//         enum: ['lost', 'found'],
//         default: 'lost'
//     },
//     image: String
// }, { timestamps: true });
