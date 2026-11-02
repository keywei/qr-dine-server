import { Server as HttpServer } from 'http';
import { Server, Socket } from 'socket.io';
import { MenuItemUpdatedPayload } from './types/menu';

let io: Server | null = null;

export const initSocket = (httpServer: HttpServer) => {
  io = new Server(httpServer, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
    },
  });

  io.on('connection', (socket: Socket) => {
    socket.on('join', (room: string) => {
      socket.join(room);
    });

    socket.on('leave', (room: string) => {
      socket.leave(room);
    });
  });

  return io;
};

export const getIO = (): Server => {
  if (!io) {
    throw new Error('Socket.io has not been initialized!');
  }
  return io;
};

export const notifyNewOrder = (order: unknown) => {
  if (!io) return;
  io.to('admin').emit('order:new', order);
  io.emit('order:created', order);
};

export const notifyOrderUpdated = (order: { orderNo?: string } & Record<string, unknown>) => {
  if (!io) return;
  io.to('admin').emit('order:updated', order);
  if (order.orderNo) {
    io.to(`order_${order.orderNo}`).emit('order:updated', order);
  }
  io.emit('order:updated', order); // 全域推播，確保客戶端絕對接收到
  io.emit('order:status_changed', order);
};

export const notifyMenuItemUpdated = (payload: MenuItemUpdatedPayload) => {
  if (!io) return;
  io.emit('menu:item_updated', payload);
};
