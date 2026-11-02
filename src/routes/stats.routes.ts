import { Router } from 'express';
import { StatsController } from '../controllers/stats.controller';
import { authenticateJwt } from '../middlewares/auth';

const router = Router();

router.get('/summary', authenticateJwt, StatsController.getStatsSummary);

export default router;
