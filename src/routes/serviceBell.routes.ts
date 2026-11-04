import { Router } from 'express';
import { authenticateJwt } from '../middlewares/auth';
import {
  getStatus,
  callBell,
  getActiveCalls,
  completeCall,
  setGlobalSwitch,
  setTableSwitch,
} from '../controllers/serviceBell.controller';

const router = Router();

// 顧客端
router.get('/status', getStatus);
router.post('/call', callBell);

// 店家端
router.get('/active', authenticateJwt, getActiveCalls);
router.put('/:id/complete', authenticateJwt, completeCall);
router.patch('/global', authenticateJwt, setGlobalSwitch);
router.patch('/tables/:id', authenticateJwt, setTableSwitch);

export default router;

