import { Router } from "express";
import {
  addOrder,
  deleteOrder,
  getOrderById,
  getOrders,
  updateOrder,
} from "../controllers/order.controllers";

const router = Router();

router.route("/orders").get(getOrders).post(addOrder);
router
  .route("/orders/:id")
  .get(getOrderById)
  .put(updateOrder)
  .delete(deleteOrder);

export default router;
