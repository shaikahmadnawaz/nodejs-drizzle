import { Router } from "express";
import {
  addGoldItem,
  deleteGoldItem,
  getGoldItems,
  updateGoldItem,
} from "../controllers/goldStore.controllers";

const router = Router();

router.route("/gold-store").get(getGoldItems);
router.route("/gold-store").post(addGoldItem);
router.route("/gold-store/:id").put(updateGoldItem);
router.route("/gold-store/:id").delete(deleteGoldItem);

export default router;
