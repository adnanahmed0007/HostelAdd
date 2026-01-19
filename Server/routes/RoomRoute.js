import AddRoom from "../controllers/AddnewRoom.js";
import findAllRoom from "../controllers/FindRoom.js";
import allotRoom from "../controllers/RoomAllotment.js";
import SerchROOM from "../controllers/SearchRoom.js";
import express from "express";

const router = express.Router();
router.get("/findallrooms", findAllRoom);
router.post("/add/rooms", AddRoom);
router.post("/search/room", SerchROOM);
router.post("/allot/room", allotRoom);

export default router;