import express from "express";
import controll from "../controller/controll.js";
const router = express.Router();

router.get("/home", controll.home);
router.get("/home/all", controll.get);
router.get("/user/:name", controll.user);
router.get("/login", controll.signin);
router.post("/create", controll.addUser);
router.delete("/delete/:UserId", controll.delete);
export default router;