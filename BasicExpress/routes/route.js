import express from "express";
import controll from "../controller/controll.js";
const router = express.Router();

router.get("/home", controll.home);
router.get("/home/all", controll.get);
router.get("/home/all", controll.get);
router.get("/user/:name", controll.user);
router.post("/user/create", controll.addUser);
router.delete("/user/delete/:UserId", controll.delete);
export default router;
