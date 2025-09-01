// import { TLostItem } from "./Lost.interface"
// import { LostItem } from "./Lost.model"

import { TItem } from "./Lost.interface";
import { Item } from "./Lost.model";

// const createLostItem = async (lostData: TLostItem) => {
//     const result = await LostItem.create(lostData);
//     return result;
// }

// const getLostItem = async () => {
//     const result = await LostItem.find();
//     return result;
// }
// const getLostItemById = async (id: string) => {
//     const result = await LostItem.findById(id);
//     return result;
// }

// const updateLostItem = async (id: string, updateData: TLostItem) => {
//     const result = await LostItem.findByIdAndUpdate(id, updateData, { new: true });
//     return result;
// }

// export const LostService = {
//     createLostItem,
//     getLostItem,
//     getLostItemById,
//     updateLostItem
// }

const createItem = async (data: TItem) => {
  return await Item.create(data);
};

const getItems = async (status?: string) => {
  const filter = status ? { status } : {};
  return await Item.find(filter);
};

const getItemById = async (id: string) => {
  return await Item.findById(id);
};

const updateItem = async (id: string, updateData: Partial<TItem>) => {
  return await Item.findByIdAndUpdate(id, updateData, { new: true });
};

export const ItemService = {
  createItem,
  getItems,
  getItemById,
  updateItem
};
