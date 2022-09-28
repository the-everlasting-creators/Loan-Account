type CycleInterval = "monthly" | string;
type Channel =
  | "disbursement"
  | "interest"
  | "monthly fee"
  | "repayment"
  | string;
type Status = "posted" | "applied" | "cleared" | string;
export type AccountDetailsType = Omit<LoanAccountType, "transactions">;

export interface Transaction {
  date: string;
  channel: Channel;
  status: Status;
  description: string;
  amount: number;
}

export interface LoanAccountType {
  name: string;
  interestRate: number;
  limit: number;
  startDate: string;
  cycleInterval: CycleInterval;
  monthlyFee: number;
  transactions: Transaction[];
}

export interface LoanAccountPayload {
  account: LoanAccountType;
}
