import { Router } from "express";
import {
  addGoldItem,
  deleteGoldItem,
  getGoldItemById,
  getGoldItems,
  updateGoldItem,
} from "../controllers/goldStore.controllers";

const router = Router();

router.route("/gold-store").get(getGoldItems).post(addGoldItem);
router
  .route("/gold-store/:id")
  .get(getGoldItemById)
  .put(updateGoldItem)
  .delete(deleteGoldItem);

export default router;
