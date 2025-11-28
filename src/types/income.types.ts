export interface Income {
  id: string;
  user_id: string;
  source: string;
  monthly_salary: number;
  other_income: number;
  month: string;
  created_at: string;
  updated_at: string;
}

export interface IncomeCreate {
  source: string;
  monthly_salary: number;
  other_income?: number;
  month: string;
}

export interface IncomeUpdate extends Partial<IncomeCreate> {}