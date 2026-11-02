import { Router } from 'express';
import { TableController } from '../controllers/table.controller';
import { authenticateJwt } from '../middlewares/auth';

const router = Router();

router.get('/', TableController.getTables);
router.get('/batch/qrcodes', TableController.getBatchQrs);
router.get('/takeout/qrcode', TableController.getTakeoutQr);
router.get('/:code/qrcode', TableController.getTableQr);

router.post('/', authenticateJwt, TableController.createTable);
router.put('/:id', authenticateJwt, TableController.updateTable);
router.delete('/:id', authenticateJwt, TableController.deleteTable);

export default router;
