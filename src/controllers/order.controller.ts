import { Request, Response } from 'express';
import { createOrder as createOrderService, getOrders as getOrdersService, getOrderByNo as getOrderByNoService } from '../services/order.service';
import { OrderStateService } from '../services/orderState.service';
import { successResponse } from '../utils/response';
import { asyncHandler } from '../utils/asyncHandler';
import { MESSAGES } from '../constants/messages';

export const createOrder = asyncHandler(async (req: Request, res: Response) => {
  const order = await createOrderService(req.body);
  successResponse(res, order, MESSAGES.ORDER.CREATED);
});

export const getOrders = asyncHandler(async (req: Request, res: Response) => {
  const orders = await getOrdersService(req.query);
  successResponse(res, orders);
});

export const getOrderByNo = asyncHandler(async (req: Request, res: Response) => {
  const orderNo = String(req.params.orderNo);
  const order = await getOrderByNoService(orderNo);
  successResponse(res, order);
});

export const confirmCashPayment = asyncHandler(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const order = await OrderStateService.confirmCashPayment(id);
  successResponse(res, order, MESSAGES.ORDER.CASH_PAYMENT_CONFIRMED);
});

export const updateOrderStatus = asyncHandler(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const order = await OrderStateService.updateOrderStatus(id, req.body.status);
  successResponse(res, order, MESSAGES.ORDER.STATUS_UPDATED(order.status));
});

export const OrderController = {
  createOrder,
  getOrders,
  getOrderByNo,
  confirmCashPayment,
  updateOrderStatus,
};
