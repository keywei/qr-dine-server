import { Router } from 'express';
import authRoutes from './auth.routes';
import categoryRoutes from './category.routes';
import menuRoutes from './menu.routes';
import orderRoutes from './order.routes';
import paymentRoutes from './payment.routes';
import tableRoutes from './table.routes';
import statsRoutes from './stats.routes';
import uploadRoutes from './upload.routes';
import storeRoutes from './store.routes';
import queueRoutes from './queue.routes';
import adminQueueRoutes from './adminQueue.routes';
import serviceBellRoutes from './serviceBell.routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/categories', categoryRoutes);
router.use('/', menuRoutes);
router.use('/orders', orderRoutes);
router.use('/payments', paymentRoutes);
router.use('/tables', tableRoutes);
router.use('/stats', statsRoutes);
router.use('/upload', uploadRoutes);
router.use('/store', storeRoutes);
router.use('/queue', queueRoutes);
router.use('/admin/queue', adminQueueRoutes);
router.use('/service-bell', serviceBellRoutes);

export default router;
