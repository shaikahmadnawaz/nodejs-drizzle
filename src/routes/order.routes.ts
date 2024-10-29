import { Router } from "express";
import {
  deleteOrder,
  getOrderById,
  getOrderDetailsById,
  getOrders,
  placeOrder,
  updateOrder,
} from "../controllers/order.controllers";

const router = Router();

router.route("/orders").get(getOrders).post(placeOrder);
router
  .route("/orders/:id")
  .get(getOrderById)
  .put(updateOrder)
  .delete(deleteOrder);
router.get("/orders/details/:id", getOrderDetailsById);

export default router;
