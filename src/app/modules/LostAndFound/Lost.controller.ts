// import { Request, Response } from 'express';
// import { LostService } from './Lost.service';
// import httpStatus from 'http-status';
// import sendResponse from '../../utils/sendResponse';

// const createLostItem = async (req: Request, res: Response) => {
//   //  const { lostItem: lostItemData } = req.body;
//   //   try {
//   //     const item = await LostService.createLostItem(req.body);
//   //     res.status(201).json(item);
//   //   } catch (err) {
//   //     res.status(500).json({ error: 'Failed to create item' });
//   //   }

//   const result = await LostService.createLostItem(req.body);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Lost Item is created succesfully',
//     data: result,
//   });
// };

// const getLostItem = async (req: Request, res: Response) => {
//   //   try {
//   //     const items = await LostService.getLostItem();
//   //     res.status(200).json(items);
//   //   } catch (err) {
//   //     res.status(500).json({ error: 'Failed to get items' });
//   //   }

//   const result = await LostService.getLostItem();

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Lost Items are fetched succesfully',
//     data: result,
//   });
// };

// const getLostItemById = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   //   try {
//   //     const item = await LostService.getLostItemById(id);
//   //     if (!item) {
//   //       return res.status(404).json({ error: 'Item not found' });
//   //     }
//   //     res.status(200).json(item);
//   //   } catch (err) {
//   //     res.status(500).json({ error: 'Failed to get item' });
//   //   }

//   const result = await LostService.getLostItemById(id);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Lost Item is fetched succesfully',
//     data: result,
//   });
// };

// const updateLostItem = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   //   try {
//   //     const updatedItem = await LostService.updateLostItem(id, req.body);
//   //     if (!updatedItem) {
//   //       return res.status(404).json({ error: 'Item not found' });
//   //     }
//   //     res.status(200).json(updatedItem);
//   //   } catch (err) {
//   //     res.status(500).json({ error: 'Failed to update item' });
//   //   }

//   const result = await LostService.updateLostItem(id, req.body);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Lost Item is updated succesfully',
//     data: result,
//   });
// };

// export const LostController = {
//   createLostItem,
//   getLostItem,
//   getLostItemById,
//   updateLostItem,
// };


import { Request, Response } from 'express';
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { ItemService } from './Lost.service';
 

const createItem = async (req: Request, res: Response) => {
  const result = await ItemService.createItem(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Item created successfully',
    data: result,
  });
};

const getItems = async (req: Request, res: Response) => {
  const { status } = req.query; // ?status=lost / found
  const result = await ItemService.getItems(status as string);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Items fetched successfully',
    data: result,
  });
};

const getItemById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ItemService.getItemById(id);

  sendResponse(res, {
    statusCode: result ? httpStatus.OK : httpStatus.NOT_FOUND,
    success: !!result,
    message: result ? 'Item fetched successfully' : 'Item not found',
    data: result,
  });
};

const updateItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ItemService.updateItem(id, req.body);

  sendResponse(res, {
    statusCode: result ? httpStatus.OK : httpStatus.NOT_FOUND,
    success: !!result,
    message: result ? 'Item updated successfully' : 'Item not found',
    data: result,
  });
};

export const ItemController = {
  createItem,
  getItems,
  getItemById,
  updateItem,
};
