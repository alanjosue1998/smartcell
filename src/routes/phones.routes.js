import { Router, response } from "express";

const router = Router();

router.get("/", (request, response) => {
    response.send("Phones");
});

export default router;