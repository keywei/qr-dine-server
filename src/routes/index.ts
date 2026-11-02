import { Router } from 'express';
import authRoutes from './auth.routes';
import categoryRoutes from './category.routes';
import menuRoutes from './menu.routes';
import orderRoutes from './order.routes';
import paymentRoutes from './payment.routes';
import tableRoutes from './table.routes';
import statsRoutes from './stats.routes';
import uploadRoutes from './upload.routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/categories', categoryRoutes);
router.use('/', menuRoutes);
router.use('/orders', orderRoutes);
router.use('/payments', paymentRoutes);
router.use('/tables', tableRoutes);
router.use('/stats', statsRoutes);
router.use('/upload', uploadRoutes);

export default router;
