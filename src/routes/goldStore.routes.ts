import { Router } from "express";
import {
  addGoldItem,
  getGoldItems,
} from "../controllers/goldStore.controllers";

const router = Router();

router.route("/gold-store").get(getGoldItems);
router.route("/gold-store").post(addGoldItem);

export default router;
