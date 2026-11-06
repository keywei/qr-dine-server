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
    connectionStateRecovery: {
      maxDisconnectionDuration: 2 * 60 * 1000,
      skipMiddlewares: true,
    },
  });

  io.on('connection', (socket: Socket) => {
    socket.on('error', (err: any) => {
      if (err?.code === 'ECONNRESET') return;
      console.error('[Socket Error]:', err);
    });

    socket.on('join', (rooms: string | string[]) => {
      const list = Array.isArray(rooms) ? rooms : [rooms];
      const valid = list.filter((r): r is string => typeof r === 'string' && r.trim().length > 0);
      if (valid.length > 0) socket.join(valid);
    });

    socket.on('leave', (room: string) => {
      socket.leave(room);
    });
  });

  return io;
};

export const getIO = (): Server | null => io;

export const notifyNewOrder = (order: unknown) => {
  io?.to('admin').emit('order:new', order);
};

export const notifyOrderUpdated = (order: { orderNo?: string } & Record<string, unknown>) => {
  const rooms = order.orderNo ? ['admin', `order_${order.orderNo}`] : 'admin';
  io?.to(rooms).emit('order:updated', order);
};

export const notifyMenuItemUpdated = (payload: MenuItemUpdatedPayload) => {
  io?.emit('menu:item_updated', payload);
};

export const notifyCategoryUpdated = () => {
  io?.emit('category:updated');
};

export const notifyQueueUpdated = () => {
  io?.emit('queue:updated');
};

export const notifyQueueCalled = (ticket: unknown) => {
  io?.emit('queue:called', ticket);
};
