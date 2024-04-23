import { Router } from "express";
import { renderHome } from "../controllers/home.controller.js";
import { login } from "../controllers/login.controller.js";
import { renderPrivate } from "../controllers/private.controller.js";

const router = Router();

router.get("/", renderHome);
router.post("/login", login);
router.get("/private", renderPrivate);

export default router;
