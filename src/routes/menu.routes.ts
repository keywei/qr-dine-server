import { Router } from 'express';
import { MenuItemController } from '../controllers/menuItem.controller';
import { authenticateJwt } from '../middlewares/auth';

const router = Router();

router.get('/menu', MenuItemController.getMenu);
router.get('/menu-items', MenuItemController.getMenuItems);
router.get('/menu-items/:id', MenuItemController.getMenuItemById);
router.post('/menu-items', authenticateJwt, MenuItemController.createMenuItem);
router.put('/menu-items/:id', authenticateJwt, MenuItemController.updateMenuItem);
router.patch('/menu-items/:id/availability', authenticateJwt, MenuItemController.toggleAvailability);
router.delete('/menu-items/:id', authenticateJwt, MenuItemController.deleteMenuItem);

export default router;
