import express from 'express';
import { createItem,getAllItems, getItemById, deleteItem, updateItem} from '../controller/item.controller';

const router = express.Router();

router.get('/items', getAllItems);
router.get('/items/:id', getItemById);
router.post('/items', createItem);
router.put('/items/:id', updateItem);
router.delete('/items/:id', deleteItem);

router.post('/create', createItem);

export default router;