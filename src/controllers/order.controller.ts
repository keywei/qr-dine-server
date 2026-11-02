import { Request, Response } from 'express';
import { OrderService } from '../services/order.service';
import { OrderStateService } from '../services/orderState.service';
import { successResponse } from '../utils/response';
import { asyncHandler } from '../utils/asyncHandler';
import { MESSAGES } from '../constants/messages';
import { HttpStatus, ResponseCode } from '../types/api';

export class OrderController {
  static createOrder = asyncHandler(async (req: Request, res: Response) => {
    const order = await OrderService.createOrder(req.body);
    successResponse(res, order, MESSAGES.ORDER.CREATED, ResponseCode.CREATED, HttpStatus.CREATED);
  });

  static getOrders = asyncHandler(async (req: Request, res: Response) => {
    const orders = await OrderService.getOrders(req.query);
    successResponse(res, orders);
  });

  static getOrderByNo = asyncHandler(async (req: Request, res: Response) => {
    const orderNo = String(req.params.orderNo);
    const order = await OrderService.getOrderByNo(orderNo);
    successResponse(res, order);
  });

  static confirmCashPayment = asyncHandler(async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const order = await OrderStateService.confirmCashPayment(id);
    successResponse(res, order, MESSAGES.ORDER.CASH_PAYMENT_CONFIRMED);
  });

  static updateOrderStatus = asyncHandler(async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const order = await OrderStateService.updateOrderStatus(id, req.body.status);
    successResponse(res, order, MESSAGES.ORDER.STATUS_UPDATED(order.status));
  });
}
