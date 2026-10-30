import http from 'http';
import path from 'path';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initSocket } from './socket';
import routes from './routes';

dotenv.config();

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

// Initialize Socket.io
initSocket(server);

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static uploaded images
const uploadsPath = path.join(__dirname, '../uploads');
app.use('/uploads', express.static(uploadsPath));

// API Routes
app.use('/api', routes);

// Health check
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error('Unhandled server error:', err);
  res.status(500).json({
    success: false,
    message: err.message || '內部伺服器錯誤',
  });
});

server.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(`🚀 QR Code Order Server is running!`);
  console.log(`📡 URL: http://localhost:${PORT}`);
  console.log(`📂 Uploads path: ${uploadsPath}`);
  console.log(`⚡ Socket.io enabled`);
  console.log(`===============================================`);
});

