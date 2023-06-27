import { Router } from "express";
import { methods as phonesController } from "./../controllers/phones.controller";

const router = Router();

router.get("/", phonesController.getPhones);

export default router;
