import { Router } from "express";
import { methods as phonesController } from "./../controllers/phones.controller";

const router = Router();

router.get("/", phonesController.getPhones);
router.get("/:id", phonesController.getPhone);
router.post("/", phonesController.addPhones);
router.delete("/:id", phonesController.deletePhone);
router.put("/:id", phonesController.updatePhone);

export default router;
