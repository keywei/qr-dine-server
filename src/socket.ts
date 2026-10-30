import { Server as HttpServer } from 'http';
import { Server, Socket } from 'socket.io';

let io: Server | null = null;

export const initSocket = (httpServer: HttpServer) => {
  io = new Server(httpServer, {
    cors: {
      origin: '*', // Allow all origins for dev flexibility
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
    },
  });

  io.on('connection', (socket: Socket) => {
    console.log(`[Socket.io] Client connected: ${socket.id}`);

    // Join specific rooms: e.g. 'admin', 'table_{tableId}', 'order_{orderNo}'
    socket.on('join', (room: string) => {
      socket.join(room);
      console.log(`[Socket.io] Client ${socket.id} joined room: ${room}`);
    });

    socket.on('leave', (room: string) => {
      socket.leave(room);
      console.log(`[Socket.io] Client ${socket.id} left room: ${room}`);
    });

    socket.on('disconnect', () => {
      console.log(`[Socket.io] Client disconnected: ${socket.id}`);
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

// Notification helper functions
export const notifyNewOrder = (order: any) => {
  if (!io) return;
  // Broadcast to all admin and kitchen clients
  io.to('admin').emit('order:new', order);
  io.emit('order:created', order);
};

export const notifyOrderUpdated = (order: any) => {
  if (!io) return;
  // Broadcast to admin room
  io.to('admin').emit('order:updated', order);
  // Broadcast to the specific order room so customer's tracking page receives it
  io.to(`order_${order.orderNo}`).emit('order:updated', order);
  // Also global event
  io.emit('order:status_changed', order);
};

