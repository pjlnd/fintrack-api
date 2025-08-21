import { Router } from "express";
import { ExpenseController } from "../controllers/expenseController";

const router =  Router();

router.post("/", ExpenseController.create)
router.get("/", ExpenseController.getAll)
router.get("/sumary", ExpenseController.sumary)
router.get("/:id", ExpenseController.getById)
router.put("/:id", ExpenseController.update)
router.delete("/:id", ExpenseController.delete)

export default router