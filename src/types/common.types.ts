export interface ApiResponse<T = any> {
  status: 'success' | 'error';
  data: T;
  message?: string;
}

export interface PaginatedResponse<T> {
    items: T[];
    total: number;
    page: number;
    pageSize: number;
    pages: number;
}

export type Priority = 'low' | 'medium' | 'high';
export type Period = 'daily' | 'weekly' | 'monthly' | 'yearly';