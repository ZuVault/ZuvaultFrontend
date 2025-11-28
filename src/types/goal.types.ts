import type { Priority } from "./common.types";

export type GoalType =
| 'emergency'
| 'investment'
| 'purchase'
| 'debt_repayment'
| 'education'
| 'travel'
| 'retirement'
| 'other';

export interface FinancialGoal {
  id: string;
  user_id: string;
  goal_name: string;
  goal_type: GoalType;
  target_amount: number;
  current_amount: number;
  target_date: string;
  priority: Priority;
  monthly_contribution?: number;
  description?: string;
  progress_percentage: number;
  is_completed: boolean;
  created_at: string;
  updated_at: string;
}

export interface GoalCreate {
  goal_name: string;
  goal_type: GoalType;
  target_amount: number;
  current_amount?: number;
  target_date: string;
  priority: Priority;
  monthly_contribution?: number;
  description?: string;
}

export interface GoalUpdate extends Partial<GoalCreate> {}