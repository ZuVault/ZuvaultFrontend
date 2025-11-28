export type ExpenseCategory = 
'food' | 
'transportation' |
 'utilities' |
  'entertainment' |
   'healthcare' |
    'other';

export interface Expense {
    id: string;
    user_id: string;
    amount: number;
    category: ExpenseCategory;
    description?: string;
    date: string;
    created_at: string;
    updated_at: string;
}

export interface ExpenseCreate{
    amount: number;
    category: ExpenseCategory;
    description?: string;
    expense_date: string;
    is_recurring?: boolean;
}

export interface ExpenseUpdate extends Partial<ExpenseCreate> {}

export interface ExpenseFilters {
    startDate?: string;
    endDate?: string;
    category?: ExpenseCategory;
}