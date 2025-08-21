import { Expense } from "../models/expense";
import { v4 as uuidv4 } from "uuid";

export class ExpenseService {
    private expenses: Expense[] = [];

    create(expenseData: Omit<Expense, "id">): Expense {
        const newExpense: Expense = { id: uuidv4(), ...expenseData };
        this.expenses.push(newExpense);
        return newExpense;
    }

    findAll(): Expense[] {
        return this.expenses;
    }

    findById(id: string): Expense | undefined {
        return this.expenses.find(exp => exp.id === id)
    }

    update(id: string, data: Partial<Omit<Expense, "id">>): Expense | null {
        const expense = this.findById(id);
        if (!expense) return null;

        Object.assign(expense, data);
        return expense
    }

    delete(id: string): boolean {
        const index = this.expenses.findIndex(exp => exp.id === id)
        if (index === -1) return false;

        this.expenses.splice(index, 1)
        return true;
    }

    sumary() {
        const total = this.expenses.reduce((acc, exp) => acc + exp.amount, 0);
        const byCategory: Record<string, number> = {}

        this.expenses.forEach(exp => {
            byCategory[exp.category] = (byCategory[exp.category] || 0) + exp.amount;
        });

        return { total, byCategory }
    }

}