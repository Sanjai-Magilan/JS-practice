import express from "express";
import controll from "../controller/controll.js";
const router = express.Router();
import Authentication from "../middleware/UserAuth.js";

router.get("/home", controll.home);
router.get("/home/all", controll.get);
router.get("/user/:name", controll.user);
router.post("/login", controll.signin);
router.post("/create", Authentication, controll.addUser);
router.delete("/delete/:UserId", Authentication, controll.delete);
export default router;
