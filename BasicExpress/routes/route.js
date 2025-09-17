import express from "express"
import controll from "../controller/controll.js"
const router = express.Router()

router.get("/home",controll.home)

export default router