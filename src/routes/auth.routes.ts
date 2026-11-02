import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';
import { authenticateJwt } from '../middlewares/auth';

const router = Router();

router.post('/login', AuthController.login);
router.get('/me', authenticateJwt, AuthController.getMe);

export default router;
