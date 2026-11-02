import { Request, Response } from 'express';
import { OrderService } from '../services/order.service';
import { OrderStateService } from '../services/orderState.service';
import { successResponse } from '../utils/response';
import { asyncHandler } from '../utils/asyncHandler';

export class OrderController {
  static createOrder = asyncHandler(async (req: Request, res: Response) => {
    const order = await OrderService.createOrder(req.body);
    successResponse(res, order, '訂單已建立', 0, 201);
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
    successResponse(res, order, '已確認收款，訂單轉入製作中');
  });

  static updateOrderStatus = asyncHandler(async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const order = await OrderStateService.updateOrderStatus(id, req.body.status);
    successResponse(res, order, `訂單狀態已更新為: ${order.status}`);
  });
}
