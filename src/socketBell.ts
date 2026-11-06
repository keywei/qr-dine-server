import { getIO } from './socket';

export const notifyServiceBellCalled = (call: unknown) => {
  getIO()?.to('admin').emit('service_bell:called', call);
};

export const notifyServiceBellCompleted = (callId: number) => {
  getIO()?.to('admin').emit('service_bell:completed', { id: callId });
};

export const notifyServiceBellConfigChanged = (config: unknown) => {
  getIO()?.emit('service_bell:config_changed', config);
};
