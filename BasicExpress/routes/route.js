import express from "express";
import controll from "../controller/controll.js";
const router = express.Router();

router.get("/home", controll.home);
router.get("/user/:name", controll.user);

export default router;
