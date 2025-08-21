import { Request, Response } from "express";
import { ExpenseService } from "../services/expenseService";

const expenseService = new ExpenseService();

export class ExpenseController {
    static create(req: Request, res: Response) {
        const { title, amount, category, date } = req.body;
        const expense = expenseService.create({ title, amount, category, date });
        return res.status(201).json(expense);
    }

    static getAll(req: Request, res: Response) {
        return res.json(expenseService.findAll());
    }

    static getById(req: Request, res: Response) {
        const expense = expenseService.findById(req.params.id);
        if (!expense) return res.status(404).json({ message: "Expense not found" })
        return res.json(expense)
    }

    static update(req: Request, res: Response) {
        const expense = expenseService.update(req.params.id, req.body)
        if (!expense) return res.status(404).json({ message: "Expense not found" });
        return res.json(expense)
    }

    static delete(req: Request, res: Response) {
        const deleted = expenseService.delete(req.params.id)
        if (!deleted) return res.status(404).json({ message: "Expense not found" })
        return res.status(204).send()
    }

    static sumary(req: Request, res: Response) {
        return res.json(expenseService.sumary())
    }

}


