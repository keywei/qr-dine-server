import { Server } from 'socket.io';
import { getIO } from './socket';

export const notifyServiceBellCalled = (call: unknown) => {
  try {
    const io: Server = getIO();
    io.to('admin').emit('service_bell:called', call);
    io.emit('service_bell:called', call);
  } catch (err) {
    console.error('[Socket Bell Error]:', err);
  }
};

export const notifyServiceBellCompleted = (callId: number) => {
  try {
    const io: Server = getIO();
    io.to('admin').emit('service_bell:completed', { id: callId });
    io.emit('service_bell:completed', { id: callId });
  } catch (err) {
    console.error('[Socket Bell Error]:', err);
  }
};

export const notifyServiceBellConfigChanged = (config: unknown) => {
  try {
    const io: Server = getIO();
    io.emit('service_bell:config_changed', config);
  } catch (err) {
    console.error('[Socket Bell Error]:', err);
  }
};

