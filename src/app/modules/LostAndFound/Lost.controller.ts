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

const getLostItemById = async(req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const item = await LostService.getLostItemById(id);
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.status(200).json(item);
    } catch (err) {
        res.status(500).json({ error: 'Failed to get item' });
    }
}

const updateLostItem = async(req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const updatedItem = await LostService.updateLostItem(id, req.body);
        if (!updatedItem) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.status(200).json(updatedItem);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update item' });
    }
}


export const LostController = {
    createLostItem,
    getLostItem,
    getLostItemById,
    updateLostItem
}