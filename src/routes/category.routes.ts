import { Router } from 'express';
import { CategoryController } from '../controllers/category.controller';
import { authenticateJwt } from '../middlewares/auth';

const router = Router();

router.get('/', CategoryController.getCategories);
router.post('/', authenticateJwt, CategoryController.createCategory);
router.put('/:id', authenticateJwt, CategoryController.updateCategory);
router.delete('/:id', authenticateJwt, CategoryController.deleteCategory);

export default router;
