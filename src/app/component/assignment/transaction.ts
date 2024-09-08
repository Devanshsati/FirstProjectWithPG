export interface Transaction {
    cname: string;   // Customer name
    accno: string;   // Account number
    ttype: string;   // Transaction type (e.g., Credit, Debit)
    tdate: string;   // Transaction date
    amount: number;  // Amount of the transaction
}