import express from "express";
import { login } from "../controllers/auth.js"
//author Devarsh Makwana
const router = express.Router();

router.post("/login", login)

export default router;