import { Router } from 'express';
import { getStore, updateStore } from '../controllers/store.controller';
import { authenticateJwt } from '../middlewares/auth';

const router = Router();

router.get('/', getStore);
router.put('/', authenticateJwt, updateStore);

export default router;
