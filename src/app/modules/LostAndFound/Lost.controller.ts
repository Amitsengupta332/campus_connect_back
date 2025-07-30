/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express"
import {   LostService } from "./Lost.service";

const createLostItem = async(req: Request, res: Response) =>{
//  const { lostItem: lostItemData } = req.body;
  try {
    const item = await LostService.createLostItem(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create item' });
  }
}

const getLostItem = async(req: Request, res: Response) => {
    try {
        const items = await LostService.getLostItem();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ error: 'Failed to get items' });
    }
}

export const LostController = {
    createLostItem,
    getLostItem,
    // getLostItemById,
    // updateLostItem
}