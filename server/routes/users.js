import express from "express";
import { verifyToken } from "../middleware/auth.js";
import {
  addRemoveFriend,
  getUser,
  getUserFriends,
} from "../controllers/users.js";

const router = express.Router();

router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);
router.post("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;
