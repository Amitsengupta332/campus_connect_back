import express from 'express';
import { LostController } from './Lost.controller';
const router = express.Router();

router.post('/create-lostItem', LostController.createLostItem);
router.get('/get-lostItem', LostController.getLostItem);


export const LostItemRoutes = router;