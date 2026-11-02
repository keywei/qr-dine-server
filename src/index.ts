import http from 'http';
import path from 'path';
import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initSocket } from './socket';
import routes from './routes';
import { errorHandler } from './middlewares/error';
import { successResponse } from './utils/response';

dotenv.config();

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

initSocket(server);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uploadsPath = path.join(__dirname, '../uploads');
app.use('/uploads', express.static(uploadsPath));

app.use('/api', routes);

app.get('/health', (_req: Request, res: Response) => {
  successResponse(res, { status: 'ok', timestamp: new Date() });
});

app.use(errorHandler);

server.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(`🚀 QR Code Order Server is running on http://localhost:${PORT}`);
  console.log(`📂 Uploads path: ${uploadsPath}`);
  console.log(`===============================================`);
});
