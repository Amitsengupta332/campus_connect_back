// import express from 'express';
 
// const router = express.Router();

// // router.post('/create-item', ItemController.createItem);
// // router.get('/get-items', ItemController.getItems);
// // router.get('/get-item/:id', ItemController.getItemById);
// // router.patch('/update-item/:id', ItemController.updateItem);

// // router.post('/create-lostItem', LostController.createLostItem);
// // router.get('/get-lostItem', LostController.getLostItem);
// // router.get('/get-lostItem/:id', LostController.getLostItemById);
// // router.patch('/update-lostItem/:id', LostController.updateLostItem);


// export const LostItemRoutes = router;

import express from 'express';
import { ItemController } from './Lost.controller';
 

const router = express.Router();

router.post('/create-item', ItemController.createItem);
router.get('/get-items', ItemController.getItems);
router.get('/get-item/:id', ItemController.getItemById);
router.patch('/update-item/:id', ItemController.updateItem);

export const ItemRoutes = router;
