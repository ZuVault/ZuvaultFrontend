export interface Recommendation_Request {
    disposable_amount: number;
}

export interface AllocationDetail {
  equity: number;
  debt: number;
  gold: number;
  emergency: number;
  savings: number;
}

export interface RecommendationResponse {
  equity: number;
  debt: number;
  gold: number;
  emergency: number;
  savings: number;
  detailed: {
    risk_profile: string;
    allocations: AllocationDetail;
    monthly_surplus: number;
  };
  text: string;
  insights: string;
}