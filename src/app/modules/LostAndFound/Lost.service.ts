import { TLostItem } from "./Lost.interface"
import { LostItem } from "./Lost.model"

const creatLostItem = async (lostData: TLostItem) => {
    const result = await LostItem.create(lostData);
    return result;
}

const getLostItem = async () => {
    const result = await LostItem.find();
    return result;
}
// const getLostItemById = async (id: string) => {
//     const result = await LostItem.findById(id);
//     return result;
// }

// const updateLostItem = async() =>{

// }

export const LostService = {
    creatLostItem,
    getLostItem,
    // getLostItemById,
    // updateLostItem
}