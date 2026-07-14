import { Router } from 'express';
import { getAll } from '../controllers/skillController.js';

const router = Router();

router.get('/', getAll);

export default router;
