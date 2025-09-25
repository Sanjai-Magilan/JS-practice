import express from "express";
import controll from "../controller/controll.js";
const router = express.Router();
import Authentication from "../middleware/UserAuth.js";
import authorizeRoles from "../middleware/Authoriz.js";
router.get(
  "/home",
  Authentication,
  authorizeRoles("member", "admin", "guest"),
  controll.home
);
router.get(
  "/home/all",
  Authentication,
  authorizeRoles("member", "admin", "guest"),
  controll.get
);
router.get(
  "/user/:name",
  Authentication,
  authorizeRoles("member", "admin", "guest"),
  controll.user
);
router.post("/login", controll.signin);
router.post(
  "/create",
  Authentication,
  authorizeRoles("member", "admin"),
  controll.addUser
);
router.delete(
  "/delete/:UserId",
  Authentication,
  authorizeRoles("admin"),
  controll.delete
);
router.put("/update", Authentication, authorizeRoles("admin"), controll.update);
export default router;
