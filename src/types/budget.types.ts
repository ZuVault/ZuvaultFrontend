import type { ExpenseCategory } from "./expense.types";
import type { Period } from "./common.types";

export interface Budget {
    id: string;
  user_id: string;
  category: ExpenseCategory;
  allocated_amount: number;
  spent_amount: number;
  period: Period;
  start_date: string;
  end_date: string;
  notes?: string;
  remaining_amount: number;
  utilization_percentage: number;
  is_exceeded: boolean;
  ai_suggested: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface BudgetCreate {
  category: ExpenseCategory;
  allocated_amount: number;
  period: Period;
  start_date: string;
  end_date: string;
  notes?: string;
}

export interface BudgetUpdate extends Partial<BudgetCreate> {}

export interface BudgetSummary {
    total_allocated: number;
    total_spent: number;
    total_remaining: number;
    overall_utilization: number;
    exceeded_budgets_count: number;
    active_budgets_count: number;
    budgets: Budget[];
}
