import { Router } from "express";
import { getTasks, saveTasks, updateTask, deleteTask } from "../controllers/TaskControllers.js";


const router = Router()

router.get("/get", getTasks);
router.post("/save", saveTasks);
router.put("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);


export default router;