import express from 'express';
import { LostController } from './Lost.controller';
const router = express.Router();

router.post('/create-lostItem', LostController.createLostItem);
router.get('/get-lostItem', LostController.getLostItem);
router.get('/get-lostItem/:id', LostController.getLostItemById);
router.patch('/update-lostItem/:id', LostController.updateLostItem);


export const LostItemRoutes = router;