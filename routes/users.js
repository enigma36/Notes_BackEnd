import express from "express";
import {createUser} from "../controllers/users.js";
import {getUsers} from "../controllers/users.js";
import {getUser} from "../controllers/users.js";
import {deleteUser} from "../controllers/users.js";
import {updateUser} from "../controllers/users.js";

const router = express.Router();


router.get("/users", getUsers);
router.post("/user", createUser);
router.get("/user/:id", getUser);
router.delete("/user/:id", deleteUser);
router.put("/user/:id", updateUser);

export default router;
