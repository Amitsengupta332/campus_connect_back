import { model, Schema } from "mongoose";
import { TLostItem } from "./Lost.interface";


const LostItemSchema = new Schema<TLostItem>({

    title: { type: String, required: true },
    description: String,
    category: {
        type: String,
        enum: ['ID Card', 'Phone', 'Laptop', 'Other'],
        required: true
    },
    status: {
        type: String,
        enum: ['lost', 'found'],
        default: 'lost'
    },
    image: String
}, { timestamps: true });


export const LostItem = model<TLostItem>('LostItem', LostItemSchema);