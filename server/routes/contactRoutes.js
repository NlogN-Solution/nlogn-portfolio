import { Router } from 'express';
import { create, contactValidation } from '../controllers/contactController.js';
import validate from '../middleware/validate.js';

const router = Router();

router.post('/', contactValidation, validate, create);

export default router;
