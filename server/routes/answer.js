import express from "express"
import { postanswer,deleteanswer } from "../controller/Answer.js";
import auth from "../middleware/auth.js";
const router=express.Router();
router.patch("/post/:id",auth,postanswer);
router.patch("/delete/:id",auth,deleteanswer);

export default router;