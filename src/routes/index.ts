import { Router, Request, Response } from 'express';
import { login, getMe } from '../controllers/authController';
import {
  getTables,
  createTable,
  updateTable,
  deleteTable,
  getTableQRCode,
  getTakeoutQRCode,
  getAllBatchQRCodes,
} from '../controllers/tableController';
import {
  getMenu,
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  getMenuItems,
  getMenuItemById,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
  toggleItemAvailability,
} from '../controllers/menuController';
import {
  createOrder,
  getOrders,
  getOrderByNo,
  confirmCashPayment,
  updateOrderStatus,
} from '../controllers/orderController';
import { mockPay } from '../controllers/paymentController';
import { getStatsSummary } from '../controllers/statsController';
import { authenticateJwt } from '../middlewares/auth';
import { upload } from '../middlewares/upload';

const router = Router();

// ==================== AUTH ====================
router.post('/auth/login', login);
router.get('/auth/me', authenticateJwt, getMe);

// ==================== TABLES & QR CODES ====================
// Public for client checking table / QR
router.get('/tables', getTables);
router.get('/tables/:code/qrcode', getTableQRCode);
router.get('/tables/takeout/qrcode', getTakeoutQRCode);
router.get('/tables/batch/qrcodes', getAllBatchQRCodes);

// Admin Table CRUD
router.post('/tables', authenticateJwt, createTable);
router.put('/tables/:id', authenticateJwt, updateTable);
router.delete('/tables/:id', authenticateJwt, deleteTable);

// ==================== MENU & CATEGORIES ====================
// Public for client ordering
router.get('/menu', getMenu);
router.get('/categories', getCategories);
router.get('/menu-items', getMenuItems);
router.get('/menu-items/:id', getMenuItemById);

// Admin Category CRUD
router.post('/categories', authenticateJwt, createCategory);
router.put('/categories/:id', authenticateJwt, updateCategory);
router.delete('/categories/:id', authenticateJwt, deleteCategory);

// Admin MenuItem CRUD
router.post('/menu-items', authenticateJwt, createMenuItem);
router.put('/menu-items/:id', authenticateJwt, updateMenuItem);
router.patch('/menu-items/:id/availability', authenticateJwt, toggleItemAvailability);
router.delete('/menu-items/:id', authenticateJwt, deleteMenuItem);

// ==================== ORDERS ====================
// Public: Customer place order & track status
router.post('/orders', createOrder);
router.get('/orders/track/:orderNo', getOrderByNo);

// Admin: Order management & Kitchen
router.get('/orders', authenticateJwt, getOrders);
router.put('/orders/:id/confirm-payment', authenticateJwt, confirmCashPayment);
router.put('/orders/:id/status', authenticateJwt, updateOrderStatus);

// ==================== PAYMENTS ====================
router.post('/payments/mock-pay', mockPay);

// ==================== STATS ====================
router.get('/stats/summary', authenticateJwt, getStatsSummary);

// ==================== FILE UPLOAD ====================
router.post('/upload', authenticateJwt, upload.single('image'), (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: '未接收到圖片檔案' });
  }

  const host = req.headers.host || 'localhost:3000';
  const protocol = req.protocol;
  const fileUrl = `${protocol}://${host}/uploads/${req.file.filename}`;

  return res.json({
    success: true,
    data: {
      filename: req.file.filename,
      url: fileUrl,
    },
  });
});

export default router;

